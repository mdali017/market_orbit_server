import express, { NextFunction, Request, Response } from "express";
import { VendorsControllers } from "./vendors.controller";

const router = express.Router();

router.get("/", VendorsControllers.getAllVendors);

export const VendorsRoute = router;
