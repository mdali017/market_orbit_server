import express from "express";
import { ShopControllers } from "./shop.controller";
import { fileUploader } from "../../../helpers/fileUploader";

const router = express.Router();

// Route for creating a shop with both single and multiple file uploads
router.post(
  "/create-shop",
  // Handle both single and multiple uploads
  (req, res, next) => {
    console.log(req.body)
    if (req.body.isMultiple === "true") {
      // If the request contains multiple files, use multipleUpload
      return fileUploader.multipleUpload(req, res, next);
    }
    // Default case for single file upload (logo)
    fileUploader.singleUpload(req, res, next);
  },
  // Controller to handle the shop creation after file upload
  ShopControllers.createShop
);

export const ShopRoute = router;
