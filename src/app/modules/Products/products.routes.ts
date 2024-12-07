import express from "express";
import { ProductControllers } from "./products.controller";
import { fileUploader } from "../../../helpers/fileUploader";
// import { fileUploader } from "../../../shared/fileUploader";

const router = express.Router();

// Use `multipleUpload` for handling file uploads
router.post(
  "/create-product",
  fileUploader.multipleUpload,
  ProductControllers.createProduct
);

export const ProductsRoute = router;
