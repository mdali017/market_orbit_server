import express from "express";
import { UserRoute } from "../modules/Users/user.routes";
import { PoductCategoryRoute } from "../modules/ProductCategories/productCategory.routes";
import { VendorsRoute } from "../modules/Vendors/vendors.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoute,
  },
  {
    path: "/categories",
    route: PoductCategoryRoute,
  },
  {
    path: "/vendors",
    route: VendorsRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
