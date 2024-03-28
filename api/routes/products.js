// /*const express = require('express');
// const router = express.Router();

// Router.get('/', (req, res, next)=> {
//     res.status(200).json({
//         message: 'handling get request /products'

//     });
// });

// router.post('/',(req, res, next)=>{
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });

// router.get('/:productid',(req, res, next)=>{
//     const id = req.params.productid;
//     if(id === 'special'){
//         res.status(200).json({
//             message: 'Here is yout special id',
//             id: id,
//         })    
//     }else{
//         res.status(200).json({
//             message: 'you passed the id'
//         })
//     }
// })

// module.exports = router;*/

// //task2
// /*const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling get request /products'
//     });
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });

// router.get('/:productid', (req, res, next) => {
//     const id = req.params.productid;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'Here is your special id',
//             id: id,
//         });
//     } else {
//         res.status(200).json({
//             message: 'You passed the id'
//         });
//     }
// });


// //task3
// router.patch('./:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'update product'
//     });
// });

// router.delete('/:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'deleted product'
//     });
// }); 
// module.exports = router;*/










// /*const express = require('express');
// const router = express.Router();

// Router.get('/' , (req, res, next)=> {
//     res.status(200).json({
//         message: 'handling get request /products'

//     });
//     });

// router.post('/' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });*/

// /*router.get('/:productid',(req, res, next)=>{
//     const id = req.params.productid;
//     if(id === 'special'){
//         res.status(200).json({
//             message: 'Here is yout special id',
//             id: id,
//         })    
//     }else{
//         res.status(200).json({
//             message: 'you passed the id'
//         })
//     }
// })
// module.exports = router;*/



// // get dan post API
// /*const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling get request /products'
//     });
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });
// module.exports = router;*/



// //Task2 get & post / use if & else condition
// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling get request /products'
//     });
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });

// router.get('/:productid', (req, res, next) => {
//     const id = req.params.productid;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'Here is your special id',
//             id: id,
//         });
//     } else {
//         res.status(200).json({
//             message: 'you passed the id'
//         });
//     }
// });

// module.exports = router;




// //Task 3 add PUT & PATCH
// /*const express = require('express');
// const router = express.Router();

// let products = [
//     { id: 1, name: 'Product 1' },
//     { id: 2, name: 'Product 2' }
// ];

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'products were fetched',
//         products: products
//     });
// });

// router.post('/', (req, res, next) => {
//     const newProduct = req.body;
//     products.push(newProduct);
//     res.status(201).json({
//         message: 'product was created',
//         product: newProduct
//     });
// });

// router.get('/:productid', (req, res, next) => {
//     const productId = req.params.productid;
//     const product = products.find(p => p.id === parseInt(productId));
//     if (product) {
//         res.status(200).json({
//             message: 'product details',
//             product: product
//         });
//     } else {
//         res.status(404).json({
//             message: 'Product not found'
//         });
//     }
// });

// router.put('/:productid', (req, res, next) => {
//     const productId = req.params.productid;
//     const updatedProduct = req.body;
//     const index = products.findIndex(p => p.id === parseInt(productId));

//     if (index !== -1) {
//         products[index] = { ...products[index], ...updatedProduct };
//         res.status(200).json({
//             message: 'product put details',
//             product: products[index]
//         });
//     } else {
//         res.status(404).json({
//             message: 'Product not found'
//         });
//     }
// });

// module.exports = router;*/





// /*const express = require('express');
// const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling get request /products'
//     });
// });

// router.post('/', (req, res, next) => {
//     res.status(200).json({
//         message: 'handling post request /products'
//     });
// });

// router.get('/:productid', (req, res, next) => {
//     const id = req.params.productid;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'Here is your special id',
//             id: id,
//         });
//     } else {
//         res.status(200).json({
//             message: 'You passed the id'
//         });
//     }
// });

// router.patch('./:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'update product'
//     });
// });
// router.delete('/:productid' , (req, res, next)=>{
//     res.status(200).json({
//         message: 'deleted product'
//     });
// }); 
// module.exports = router;*/





