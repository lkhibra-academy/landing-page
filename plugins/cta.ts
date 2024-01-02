// Import necessary libraries and modules
import axios from "axios"; // Axios for making HTTP requests
import getTraffic from "./lib/traffic"; // Custom module for getting traffic data

// Retrieve traffic data using the 'getTraffic' function
const trafficData = getTraffic();

// Initialize an array of default offers
let defOffers: {
  value: number;
  discounted: number | null;
}[] = [
  {
    value: 1050,
    discounted: null,
  },
  {
    value: 650,
    discounted: null,
  },
  {
    value: 550,
    discounted: null,
  },
];

// Make an HTTP GET request to fetch offer data from an API
axios.get("https://lkhibra.alwaysdata.net/api/price.php").then(async (response: { data: number[] }) => {
  // Update 'defOffers' with the response data from the API
  defOffers = response.data.map((item) => {
    return {
      value: item,
      discounted: null,
    };
  });
});

// Define a function to replace a string based on a pattern
function replacei(str: string, i: number) {
  return str.replace(/(\\)?(\$i)/g, function (matcher, p1, p2) {
    if (p1 === "\\") return p2;
    if (p2 === "$i") return i;
    return matcher;
  });
}
// Define a function to check if data matches a specific structure
function isCTAData(data: unknown):data is {url: string, training: string, lead: (()=>void)} {
  if (typeof data !== "object") return false;
  if (typeof (data as {url: string}).url !== "string") return false;
  if (typeof (data as {lead: () => void}).lead !== "function") return false;
  return true;
}
// Define a function to guess the source of traffic
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
// Define a function to check if traffic is from ads
function isFromAds() {
  let traffic = guessSource();
  if (traffic.startsWith("Ads") || traffic.startsWith("cbo") || traffic.startsWith("ads") || traffic.startsWith("CBO") || traffic.startsWith("ADS")) {
    return true;
  }
  return false;
}
// Define default error messages
const defErrors = {
  coupon: "errors.coupon",
  generic: "errors.generic",
  invalidFields: "errors.invalidFields",
};
// Add an event listener for Alpine.js initialization
document.addEventListener("alpine:init", () => {
    // Check if traffic is from ads
  const isads = isFromAds();
    // Get the form element with the ID 'cta-form'
  const formElm = document.getElementById("cta-form")! as HTMLFormElement;
    // Initialize translations and applied coupon data
  let translations = {
    strings: [],
    discount: "",
    errors: defErrors
  };
  const applied = {
    coupon: new URLSearchParams(window.location.search).get("code") ?? "",
  };
    // Create a reactive dialog component
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
    training: "",
    contact: "WA",
    options: [
      {
        value: 0,
        text: "",
      },
    ],
  });
    // Create a reactive offers component
  const offers = Alpine.reactive({
      offers: defOffers
  })
    // Define a magic function to determine the number of offers
  Alpine.magic("noffers", () => {
    return isads ? 2 : 3;
  })
    // Define a function to fetch prices
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
                value: Math.ceil(item),
                discounted:
                  applied.coupon !== ""
                    ? Math.ceil(((100 * (defOffers[i].value - item)) / defOffers[i].value))
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
    // Define a function to update offers
  function updateOffers() {
    dialog.options = offers.offers.map((offer, i) => {
      return {
        value: offer.value,
        text: `${offer.value}dh - ${translations.strings[i]}${offer.discounted ? replacei(` ${translations.discount}`, offer.discounted) : ""}`,
      };
    }).filter((_, i) => !isads || i != 1);
    dialog.offer = String(dialog.options[0].value)
  }
    // Define a magic function for the 'dialog' component
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
    // Define a magic function for the 'offers' component
  Alpine.magic("offers", () => {
      return offers;
  })
    // Define a magic function for truncating text
  Alpine.magic("truncate", () => {
    return function truncate(str: string, length: number) {
      return str.length > length ? str.slice(0, length) + "..." : str;
    }
  })
    // Define a directive for handling CTA interactions
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
              location.href = `/${document.documentElement.lang}/Thankyou/`;
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
