import Aos from "aos";

let animations = [
  "fade",
  "fade-up",
  "fade-down",
  "flip-up",
  "flip-down",
  "slide-up",
  "slide-down",
];

export default function useAos(
  transition?:
    | "fade"
    | "fade-up"
    | "fade-down"
    | "flip-up"
    | "flip-down"
    | "slide-up"
    | "slide-down"
) {
  let exports = {
    "data-aos": transition ? transition : "fade-up",
    // "data-aos-offset": "200",
    // "data-aos-delay": "50",
    // "data-aos-duration": "1000",
  };

  return exports;
}
