const Brand=require('../models')
exports.createBrandService = async (data) => 
  const result = await Brand.create(data);
};
