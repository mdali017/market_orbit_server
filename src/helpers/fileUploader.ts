import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { ICloudinaryResponse, IFile } from "../app/Interfaces/file";

// Cloudinary configuration
cloudinary.config({
  cloud_name: "duthiv22y",
  api_key: "939611967734855",
  api_secret: "c6Hlb1Q7Z0hjoG_aX7TyImhfMV4",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Single file upload handler (for logo or any other single file)
const singleUpload = multer({ storage: storage }).single("logo");

// Multiple file upload handler
const multipleUpload = multer({ storage: storage }).array("images", 5);

const uploadToCloudinary = async (
  file: IFile
): Promise<ICloudinaryResponse | undefined> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { public_id: file.originalname },
      (error: any, result: any) => {
        fs.unlinkSync(file.path);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const fileUploader = {
  singleUpload,
  multipleUpload,
  uploadToCloudinary,
};
