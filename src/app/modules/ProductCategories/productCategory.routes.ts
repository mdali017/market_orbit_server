import express, { NextFunction, Request, Response } from "express";
import { ProductCategoryControllers } from "./productCategory.controller";
// import { UserControllers } from "./user.controller";

const router = express.Router();

router.post(
  "/create-category",
  ProductCategoryControllers.createProductCategory
);

router.get("/", ProductCategoryControllers.getAllProductCategories);

router.patch(
  "/update-category/:id",
  ProductCategoryControllers.updateProductCategory
);

router.delete(
  "/delete-category/:id",
  ProductCategoryControllers.deleteProductCategory
);

export const PoductCategoryRoute = router;
