import express from "express";

import uploadConfig from "../middlewares/uploadConfig";

const app = express();
app.use(express.json());

app.post("/upload", uploadConfig.single("image"), (request, response) => {
  if (request.file) {
    return response.json({
      error: false,
      message: "Uplaod realizado com sucesso xD",
    });
  }

  return response.json({
    error: true,
    message: "Upload não realizado, verifique o arquivo :(",
  });
});

app.listen(3000, () => console.log("Server Started."));
