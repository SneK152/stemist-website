import Aos from "aos";

type animations =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "flip-up"
  | "flip-down"
  | "slide-up"
  | "slide-down";

export default function useAos(transition?: animations) {
  let exports = {
    "data-aos": transition ? transition : "fade-up",
    // "data-aos-offset": "200",
    // "data-aos-delay": "50",
    // "data-aos-duration": "1000",
  };

  return exports;
}
