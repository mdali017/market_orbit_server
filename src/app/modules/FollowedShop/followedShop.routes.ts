import express from "express";
import { FollowedShopControllers } from "./followedShop.controller";
// import { ShopControllers } from "./shop.controller";
// import { fileUploader } from "../../../helpers/fileUploader";

const router = express.Router();

router.post(
  "/create-followed-shop",
  FollowedShopControllers.createFollowedShop
);

router.get("/", FollowedShopControllers.getAllFollowedShops);
router.get(
  "/:shopId/:customerId",
  FollowedShopControllers.getRelatedProductsForShop
);

export const FollowedShopRoute = router;
