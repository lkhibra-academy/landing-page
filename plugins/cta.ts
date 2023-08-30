import axios from "axios";
import getTraffic from "./lib/traffic";
const trafficData = getTraffic();
const defOffers:{
    value: number,
    discounted: number|null
}[] = [
  {
    value: 1050,
    discounted: null,
  },
  {
    value: 460,
    discounted: null,
  },
  {
    value: 390,
    discounted: null,
  }
];
function replacei(str: string, i: number) {
  return str.replace(/(\\)?(\$i)/g, function (matcher, p1, p2) {
    if (p1 === "\\") return p2;
    if (p2 === "$i") return i;
    return matcher;
  });
}
function isCTAData(data: unknown):data is {url: string, training: string, lead: (()=>void)} {
  if (typeof data !== "object") return false;
  if (typeof (data as {url: string}).url !== "string") return false;
  if (typeof (data as {lead: () => void}).lead !== "function") return false;
  return true;
}
function guessSource() {
  if (trafficData.source) {
    const source = trafficData.source;
    sessionStorage.setItem("trafficSource", source);
    return source;
  } else if (trafficData.utmSource) {
    const utmSource = trafficData.utmSource;
    sessionStorage.setItem("trafficSource", utmSource);
    return utmSource;
  } else {
    try {
      const refferer = new URL(trafficData.refferer);
      if (refferer.hostname === location.hostname) {
        return sessionStorage.getItem("trafficSource") ?? "Direct";
      }
      sessionStorage.setItem("trafficSource", trafficData.refferer);
      return trafficData.refferer;
    } catch (error) {
      return sessionStorage.getItem("trafficSource") ?? "Direct";
    }
  }
}
const defErrors = {
  coupon: "errors.coupon",
  generic: "errors.generic",
  invalidFields: "errors.invalidFields",
};
document.addEventListener("alpine:init", () => {
  const formElm = document.getElementById("cta-form")! as HTMLFormElement;
  let translations = {
    strings: [],
    discount: "",
    errors: defErrors
  };
  const applied = {
    coupon: new URLSearchParams(window.location.search).get("code") ?? "",
  };
  const dialog = Alpine.reactive({
    show: false,
    coupon: new URLSearchParams(window.location.search).get("code") ?? "",
    applyCoupon: {
      ["@click"](e: Event) {
        e.preventDefault();
        applied.coupon = dialog.coupon;
        fetchPrices();
      },
    },
    applyCouponInput: {
      ["@keypress"](e: KeyboardEvent) {
        if (e.key === "Enter") {
          e.preventDefault();
          applied.coupon = dialog.coupon;
          fetchPrices();
        }
      },
    },
    error: "",
    fullName: "",
    phone: "",
    email: "",
    offer: "",
    training: "Frontend",
    contact: "WA",
    options: [
      {
        value: 0,
        text: "",
      },
    ],
  });
  const offers = Alpine.reactive({
      offers: defOffers
  })
  function fetchPrices() {
    let q = new URLSearchParams();
    if (applied.coupon !== "")
        q.set("code", applied.coupon);
    axios
      .get("https://lkhibra.alwaysdata.net/api/price.php?" + q.toString())
      .then((response) => {
        const arr = response.data;
        if (!Array.isArray(arr)) {
            offers.offers = defOffers;
            dialog.error = translations.errors.coupon
            const search = new URLSearchParams(window.location.search);
            history.replaceState({}, "", `?${search.toString()}`);
        }else{
            offers.offers = arr.map((item, i) => {
              return {
                value: item,
                discounted:
                  applied.coupon !== ""
                    ? (100 * (defOffers[i].value - item)) / defOffers[i].value
                    : null,
              };
            });
            if (applied.coupon !== "") {
              const search = new URLSearchParams(window.location.search);
              search.set("code", dialog.coupon);
              history.replaceState({}, "", `?${search.toString()}`);
            }
            dialog.error = ""
        }
        updateOffers();
      }).catch(() => {
        dialog.error = translations.errors.generic
      });
  }
  function updateOffers() {
    dialog.options = offers.offers.map((offer, i) => {
      return {
        value: offer.value,
        text: `${offer.value}dh - ${translations.strings[i]}${offer.discounted ? replacei(` ${translations.discount}`, offer.discounted) : ""}`,
      };
    });
    dialog.offer = String(dialog.options[0].value)
  }
  Alpine.magic("dialog", (el) => {
    const elem = el as HTMLDivElement;
    const tran = elem.querySelector("script[type='application/json']")?.textContent;
    if (tran) translations = JSON.parse(tran);
    fetchPrices();
    const content = elem.querySelector(".dialog-content")!;
    elem.addEventListener("click", ({ target }) => {
      if (!dialog.show || content?.contains(target as Node)) return;
      dialog.show = false;
    });
    return dialog;
  });
  Alpine.magic("offers", () => {
      return offers;
  })
  Alpine.magic("truncate", () => {
    return function truncate(str: string, length: number) {
      return str.length > length ? str.slice(0, length) + "..." : str;
    }
  })
  Alpine.directive("cta", (el, { value, expression }, { evaluate }) => {
    if (value === "submit") {
      const data = evaluate(expression);
      if (!isCTAData(data)) return;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        console.log({
          name: dialog.fullName,
          email: dialog.email,
          phone: dialog.phone,
          offer: dialog.offer,
          training: dialog.training,
          traffic: guessSource(),
          coupon: applied.coupon,
        });
        if(!formElm.reportValidity()) {
          dialog.error = translations.errors.invalidFields
          return
        }
        dialog.error = ""
        axios
          .post(data.url, {
            name: dialog.fullName,
            email: dialog.email,
            phone: dialog.phone,
            offer: dialog.offer,
            training: dialog.training,
            traffic: guessSource(),
            contact: dialog.contact,
            coupon: applied.coupon,
          })
          .then((res) => {
            if (res.data.ok) {
              data.lead();
              location.href = `/${document.documentElement.lang}/thankyou?price=${dialog.offer}`;
            } else {
              dialog.error = translations.errors.generic;
            }
          })
          .catch(() => {
            dialog.error = translations.errors.generic;
          });
      })
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if(expression !== "") {
          const data = evaluate(expression) as {training: string, offer: string};
          if (data.training) dialog.training = data.training
          if (data.offer) dialog.offer = data.offer
        }
        dialog.show = true;
      });
    }
  });
});
