import type {
  MiddlewaresConfig,
  MedusaRequest,
  MedusaResponse,
  MedusaNextFunction,
} from "@medusajs/medusa";

import { getProductFilters } from "./store/custom/getProductFilters";
import { getProductsList } from "./store/custom/getProducts";

async function logger(
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) {
  next();
}

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/store/custom",
      method: "GET",
      middlewares: [logger],
    },
    {
      matcher: "/store/getProductFilters",
      method: "GET",
      middlewares: [getProductFilters],
    },
    {
      matcher: "/store/getProducts",
      method: "GET",
      middlewares: [getProductsList],
    },
  ],
};
