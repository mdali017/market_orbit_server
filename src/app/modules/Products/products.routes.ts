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

router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getProductById);
router.get(
  "/related-products/:categoryId",
  ProductControllers.getProductsByCategory
);
router.get("/shop/:shopId", ProductControllers.getProductsByShop);

// router.post("/review/:productId/:userId", ProductControllers.createReview);

export const ProductsRoute = router;
