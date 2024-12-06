import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { VendorsServices } from "./vendors.service";
import sendResponse from "../../../shared/sendResponse";

const getAllVendors = catchAsync(async (req: Request, res: Response) => {
  const result = await VendorsServices.getAllVendorsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Vendors fetched successfully!",
    data: result,
  });
});

export const VendorsControllers = {
  getAllVendors,
};
