import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { FollowedShopServices } from "./followedShop.service";

const createFollowedShop = catchAsync(async (req: Request, res: Response) => {
  const result = await FollowedShopServices.createFollowedShopIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Followed Shop created successfully!",
    data: result,
  });
});

const getRelatedProductsForShop = catchAsync(
  async (req: Request, res: Response) => {
    const { shopId, customerId } = req.params;

    // Validate the params
    if (!shopId || !customerId) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "shopId and customerId are required.",
      });
    }

    const result = await FollowedShopServices.getRelatedProductsForShop(
      shopId,
      customerId
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Related products fetched successfully.",
      data: result,
    });
  }
);

const getAllFollowedShops = catchAsync(async (req: Request, res: Response) => {
  const result = await FollowedShopServices.getAllFollowedShopsFromDB();

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Get All Followed Shops successfully!",
    data: result,
  });
});

export const FollowedShopControllers = {
  createFollowedShop,
  getAllFollowedShops,
  getRelatedProductsForShop,
};
