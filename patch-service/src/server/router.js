import Patch from "../model/patch";
const setUproute = (app) => {
  app.post("/patch-json", async (req, res, next) => {
    try {
      const { jsonDta, newData } = req.body;
      const patch = new Patch({ jsonDta });
      await patch.updateOne({ jsonData: newData.name });
      return res.status(201).json({ patch });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "this was unscessful, try again" });
    }
  });
};
export default setUproute;
