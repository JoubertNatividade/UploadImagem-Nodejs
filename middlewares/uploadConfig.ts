import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default multer({
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "public", "image"),
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
  fileFilter: (request, file, callback) => {
    const formatImage = ["image/png", "image/jpeg", "image/jpg"].find(
      (formartAccepted) => formartAccepted === file.mimetype
    );

    if (formatImage) {
      return callback(null, true);
    }

    return callback(null, false);
  },
});
