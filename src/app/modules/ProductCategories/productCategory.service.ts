import prisma from "../../../shared/prisma";

const createProductCategoryIntoDB = async (payload: any) => {
  const result = await prisma.productCategory.create({ data: payload });
  return result;
};

const getAllProductCategoriesFromDB = async () => {
  const result = await prisma.productCategory.findMany({});
  return result;
};

const updateProductCategoryIntoDB = async (id: string, payload: any) => {
  const result = await prisma.productCategory.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteProductCategoryIntoDB = async (id: string) => {
  const result = await prisma.productCategory.delete({ where: { id } });
  return result;
};

export const ProductCategoryServices = {
  createProductCategoryIntoDB,
  getAllProductCategoriesFromDB,
  updateProductCategoryIntoDB,
  deleteProductCategoryIntoDB,
};
