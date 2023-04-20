//CRUD operation in mongoose

// const product = require("./product");

// const mongoose = require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/e-commerce");

// const ProductSchema = new mongoose.Schema({
//     name: String,
//     brand: String,
//     price: Number,
//     cateogry: String

// }); 

// const saveInDB = async () => {

//     const Product = mongoose.model('products', ProductSchema);
//     let data = new Product({ name: "iphone 13", brand: "Apple", price: 1000, cateogry: "mobile" });
//     let result = await data.save();
//     console.log(result);
// }

// // saveInDB();
// // main();

// const updateInDB = async() => {

//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.updateOne(
//         {name: "A 15"},
//         {
//             $set: {price: 200}
//         }
//     )
//     console.log(data);
// }
// // updateInDB();

// const deleteInDB = async() => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.deleteOne({name: "A 15"});
//     console.log(data);
// }

// // deleteInDB();

// const readInDB = async() => {
//     const Product = mongoose.model('products', ProductSchema);
//     let data = await Product.find({name: "iphone 13"});
//     console.log(data);
// }

// readInDB();

//----------------------------------------------------------------------

//CRUD using API's

// const express = require('express');

// require('./config');

// const Product = require('./product');

// const app = express();

// app.use(express.json());

// app.post('/create', async (req, res) => {
//     const data = new Product(req.body);

//     const result = await data.save();
//     // console.log(result);
//     res.send(result);
// })

// app.get('/list', async (req, res) => {
//     const data = await Product.find();
//     // console.log(data);
//     res.send(data);
// })

// app.delete("/delete/:_id", async (req, res) => {
//     console.log(req.params);
//     const data = await Product.deleteOne(req.params);
//     res.send(data);
// })

// app.put("/update/:_id", async (req, res) => {
//     console.log(req.params);
//     const data = await Product.updateOne(
//         req.params,
//         {
//             $set: req.body
//         }
//     );
//     res.send(data);
// })

//-------------------------------------------------------------------------------



//search API with multiple feild

// const express = require('express');

// require('./config');

// const Product = require('./product');

// const app = express();

// app.use(express.json());

// app.get('/search/:key', async (req, res) => {
//     const data = await Product.find(
//         {
//             "$or":[
//                 {"name": {$regex: req.params.key}},
//                 {"brand": {$regex: req.params.key}}
//             ]
//         }
//     )
//     res.send(data);
// })

// app.listen(5000);

//----------------------------------------------------------



// UPLOAD FILE

// const express = require('express');

// const multer = require('multer');

// const app = express();

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "uploads")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpeg")
//         }
//     })
// }).single("user_file");

// app.post('/upload', upload, (req, res) => {
//     res.send("File uploaded");
// })

// app.listen(5000);


//--------------------------------------------------------


//OS MODULE

// const os = require('os');

// console.log(os.arch());
// console.log(os.freemem()/(1024 * 1024 * 1024));

// console.log(os.totalmem()/(1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());


//--------------------------------------------------------------


// EVENTS AND EVENTEMITTERS

// const express = require('express');
// const EventEmitter = require('events');
// const app = express();

// const event = new EventEmitter();

// let count = 0;

// event.on("countAPI", () => {
//     count++;
//     console.log("event "+ count + " is called");
// });
// app.get('/', (req, res) => {
//     res.send("api is called");
//     event.emit("countAPI");
// })

// app.get('/create', (req, res) => {
//     res.send("create api is called");
//     event.emit("countAPI");

// })

// app.get('/update', (req, res) => {
//     res.send("update api is called");
//     event.emit("countAPI");
// })

// app.listen(5000);