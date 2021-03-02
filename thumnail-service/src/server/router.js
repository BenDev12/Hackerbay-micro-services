import Thum from "../model/thumnail";
// import sharp from 'sharp'
const setUproute = (app) => {
  app.post("/thumbnail", async (req, res, next) => {
    try {
      const { imageUrl } = req.body;
      const newThum = new Thum({ imageUrl });
      newThum.replaceOne();
      return res.status(201).json({ newThum });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "this was unscessful, try again" });
    }
  });
};
export default setUproute;
