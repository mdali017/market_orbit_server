import express from "express";
import { UserRoute } from "../modules/Users/user.routes";
import { PoductCategoryRoute } from "../modules/ProductCategories/productCategory.routes";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
