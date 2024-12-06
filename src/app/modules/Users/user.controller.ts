import { Request, Response } from "express";
import { UserServices } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully!",
    data: result,
  });
});

export const UserControllers = { createUser };
