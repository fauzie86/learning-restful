/*const express = require('express');
const app = express();

//task1
//app.use((req, res, next) => {
  //  res.status(200).json({
    //    message: 'it is working',
      //  firstName: 'Fauzi',
       // lastName: 'testing',
       // age: '30',
       // address: 'Malaysia'
    //});
//});
//task3
const productRoutes = require('./api/router/products')
const ordertRoutes = require('./api/router/orders')
app.use('/products' , productRoutes);
app.use('/orders' , orderRoutes);


module.exports = app;*/


/*const express = require('express');
const app = express();
const productRoutes = require('./api/router/products');
const orderRoutes = require('./api/router/orders'); 

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;*/



//Task 3 add PUT & PATCH
/*const express = require('express');
const router = express.Router();

let orders = [
    { id: 1, product: 'Product 1', quantity: 5 },
    { id: 2, product: 'Product 2', quantity: 3 }
];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'order were fetched',
        orders: orders
    });
});

router.post('/', (req, res, next) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json({
        message: 'order was created',
        order: newOrder
    });
});

router.get('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const order = orders.find(o => o.id === parseInt(orderId));
    if (order) {
        res.status(200).json({
            message: 'order details',
            order: order
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.put('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const updatedOrder = req.body;
    const index = orders.findIndex(o => o.id === parseInt(orderId));

    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedOrder };
        res.status(200).json({
            message: 'order put details',
            order: orders[index]
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.patch('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const updatedFields = req.body;
    const index = orders.findIndex(o => o.id === parseInt(orderId));

    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedFields };
        res.status(200).json({
            message: 'order patch details',
            order: orders[index]
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.delete('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    orders = orders.filter(o => o.id !== parseInt(orderId));
    res.status(204).send();
});

module.exports = router;*/






/*const express = equire('express');
const router = express.Router();

router.get('/' , (req, res, next)=>{
    res.status(200).json({
        messsage: 'order were fetched'
    });
});
router.post('/' , (req, res, next)=>{
    res.status(200).json({
        messsage: 'order was fetched'
    });
});
router.get('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order detail',
        orderid: req.params.orderid
    });
});

module.exports = router;*/

/*const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created'
    });
});

router.get('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        orderid: req.params.orderid,
    });
});

router.delete('/:orderid', (req, res, next) => {
    
    res.status(200).json({
        message: 'Order deleted',
        orderid: req.params.orderid,
    });
});
router.put('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order PUT request',
        
    });
});
router.put('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order PUT',
        orderid: req.params.orderid,
    });
});
router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order PATCH request',
    });
});
router.get('/:orderid', (req, res, next) => {
    res.status(200).json({
        message: 'Order PATCH',
        orderid: req.params.orderid,
    });
});

module.exports = router;*/


