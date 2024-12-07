import express, { NextFunction, Request, Response } from "express";
import { ProductControllers } from "./products.controller";
import { fileUploader } from "../../../helpers/fileUploader";
// import { UserControllers } from "./user.controller";

const router = express.Router();

router.post(
  "/create-product",
  fileUploader.upload.array("images" as any, 10),
  ProductControllers.createProduct
);

export const ProductsRoute = router;
