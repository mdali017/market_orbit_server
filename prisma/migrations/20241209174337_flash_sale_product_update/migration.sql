-- DropForeignKey
ALTER TABLE "FlashSaleProduct" DROP CONSTRAINT "FlashSaleProduct_productId_fkey";

-- AddForeignKey
ALTER TABLE "FlashSaleProduct" ADD CONSTRAINT "FlashSaleProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
