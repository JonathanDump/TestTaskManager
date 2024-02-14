import { clsx } from "clsx";

const getValidClassNames = (...inputs) => {
  return clsx(...inputs);
};

export { getValidClassNames };
