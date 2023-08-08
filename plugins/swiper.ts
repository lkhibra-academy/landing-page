import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
const mediaQuery = window.matchMedia("(min-width: 768px)");
document.addEventListener("alpine:init", () => {
  const obj = Alpine.reactive({
    mobile: !mediaQuery.matches,
  });
  mediaQuery.addEventListener("change", () => {
    obj.mobile = !mediaQuery.matches;
  });
  Alpine.magic("mobile", () => {
    return obj.mobile;
  });
  Alpine.directive("swiper", (el) => {
    new Swiper(el as HTMLElement, {
      // Install modules
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
      autoplay: {
        delay: 4300,
      },
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 5,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 7,
        },
        620: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  });
});
