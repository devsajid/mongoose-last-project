exports.createBrand = async (req, res, next) => {
  try {
    const result=;
  } catch (error) {
    res
      .status(400)
      .json({ status: "fail", error: "couldn't create the brand" });
  }
};