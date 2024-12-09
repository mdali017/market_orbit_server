import express from "express";
import { ShopControllers } from "./shop.controller";
import { fileUploader } from "../../../helpers/fileUploader";

const router = express.Router();

// Route for creating a shop with both single and multiple file uploads
router.post(
  "/create-shop",
  (req, res, next) => {
    if (req.body.isMultiple === "true") {
      return fileUploader.multipleUpload(req, res, next);
    }
    fileUploader.singleUpload(req, res, next);
  },
  ShopControllers.createShop
);

router.get("/", ShopControllers.getAllShops);
router.get("/:id", ShopControllers.getShopById);

router.delete("/delete-shop/:id", ShopControllers.deleteShop);

export const ShopRoute = router;
