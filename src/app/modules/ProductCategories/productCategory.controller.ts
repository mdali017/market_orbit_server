import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ProductCategoryServices } from "./productCategory.service";

const createProductCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductCategoryServices.createProductCategoryIntoDB(
      req.body
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Product category created successfully!",
      data: result,
    });
  }
);

const getAllProductCategories = catchAsync(
  async (req: Request, res: Response) => {
    const result =
      await ProductCategoryServices.getAllProductCategoriesFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Product categories fetched successfully!",
      data: result,
    });
  }
);

const updateProductCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductCategoryServices.updateProductCategoryIntoDB(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Product category updated successfully!",
      data: result,
    });
  }
);

const deleteProductCategory = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductCategoryServices.deleteProductCategoryIntoDB(
      req.params.id
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Product category deleted successfully!",
      data: result,
    });
  }
);

export const ProductCategoryControllers = {
  createProductCategory,
  getAllProductCategories,
  updateProductCategory,
  deleteProductCategory,
};
