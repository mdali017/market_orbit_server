import prisma from "../../../shared/prisma";

const createUserIntoDB = async (payload: any) => {
  const { role, ...userData } = payload;

  let createdUser;

  if (role === "ADMIN") {
    createdUser = await prisma.admins.create({
      data: {
        user: {
          create: {
            ...userData,
            role,
          },
        },
      },
      include: {
        user: true,
      },
    });
  } else if (role === "VENDOR") {
    createdUser = await prisma.vendors.create({
      data: {
        user: {
          create: {
            ...userData,
            role,
          },
        },
      },
      include: {
        user: true,
      },
    });
  } else if (role === "CUSTOMER") {
    createdUser = await prisma.customers.create({
      data: {
        user: {
          create: {
            ...userData,
            role,
          },
        },
      },
      include: {
        user: true,
      },
    });
  } else {
    throw new Error("Invalid role provided");
  }

  return createdUser;
};

export const UserServices = {
  createUserIntoDB,
};
