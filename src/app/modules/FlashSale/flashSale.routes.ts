import express from "express";
import { FlashSaleControllers } from "./flashSale.controller";

const router = express.Router();

router.post("/create-flash-sale", FlashSaleControllers.createFlashSale); 
router.get("/", FlashSaleControllers.getAllFlashSales);
// router.get('/', getAllFlashSales); // Get all flash sales
// router.get('/:id', getFlashSaleById); // Get a flash sale by ID
// router.put('/:id', updateFlashSale); // Update a flash sale by ID
// router.delete('/:id', deleteFlashSale); // Delete a flash sale by ID

export const FlashSaleRoute = router;
