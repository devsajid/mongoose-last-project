// const { query } = require("express");
// const {
//   getProductsService,
//   createProductService,
//   updateProductService,
//   bulkUpdateProductService,
//   deleteProductByIdService,
//   bulkDeleteProductService,
// } = require("../services/product.services");

// exports.getProducts = async (req, res, next) => {
//   try {
//     let filters = { ...req.query };
//     //sort,page,limit =exclude
//     const excludeFields = ["sort", "page", "limit"];
//     excludeFields.forEach((field) => delete filters[field]);
//     //gt gte lt lte
//     let filtersString = JSON.stringify(filters);
//     filtersString = filtersString.replace(
//       /\b(gt|gte|lt|lte)\b/g,
//       (match) => `$${match}`
//     );

//     filters = JSON.parse(filtersString);

//     const queries = {};
//     if (req.query.sort) {
//       const sortBy = req.query.sort.split(",").join(" ");
//       console.log(sortBy);
//       queries.sortBy = sortBy;
//     }

//     if (req.query.fields) {
//       const fields = req.query.fields.split(",").join(" ");
//       queries.fields = fields;
//     }
//     const products = await getProductsService(filters, queries);

//     res.status(200).json({
//       status: "success",
//       data: products,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "can't get the data",
//       error: error.message,
//     });
//   }
// };

// exports.createProduct = async (req, res, next) => {
//   try {
//     // //    create and save database
//     const result = await createProductService(req.body);
//     result.logger();
//     res.status(200).json({
//       status: "success",
//       message: "Data inserted successfully!",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data is not inserted",
//       error: error.message,
//     });
//   }
// };

// exports.updateProduct = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await updateProductService(id, req.body);

//     res.status(200).json({
//       status: "success",
//       message: "Data inserted successfully!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data can't updated",
//       error: error.message,
//     });
//   }
// };
// exports.bulkUpdateProduct = async (req, res, next) => {
//   try {
//     const result = await bulkUpdateProductService(req.body);

//     res.status(200).json({
//       status: "success",
//       message: "Data inserted successfully!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data can't updated",
//       error: error.message,
//     });
//   }
// };

// exports.deleteProductById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const result = await deleteProductByIdService(id);
//     if (!result.deletedCount) {
//       return res.status(400).json({
//         status: "fail",
//         error: "Coldn't delete the Product",
//       });
//     } else {
//     }
//     res.status(200).json({
//       status: "success",
//       message: "Data deleted successfully!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data can't deleted",
//       error: error.message,
//     });
//   }
// };

// exports.bulkDeleteProduct = async (req, res, next) => {
//   try {
//     const result = await bulkDeleteProductService(req.body.ids);

//     res.status(200).json({
//       status: "success",
//       message: "Data deleted successfully!",
//     });
//   } catch (error) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data can't deleted",
//       error: error.message,
//     });
//   }
// };

// const app = require("express")();

// app.get("*", (req, res) => {
//   req.query; // { color: ['black', 'yellow'] }
//   res.json(req.query);
// });

// const server = await app.listen(3000);
// // Demo of making a request to the server
// const axios = require("axios");
// const querystring = "?color=black&color=yellow";
// const res = await axios.get("http://localhost:3000/" + querystring);

// res.data;
