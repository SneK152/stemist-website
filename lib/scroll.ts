export const scrollTo = (element: string) => {
  return () =>
    document.querySelector(element)?.scrollIntoView({ behavior: "smooth" });
};
