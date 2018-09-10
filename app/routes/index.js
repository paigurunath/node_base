//lib
var express = require('express');
var router = express.Router();
//controllers
const adminAddController = require('../controller').adminAdd;
const adminUpdateController = require('../controller').adminUpdate;
const adminGetController = require('../controller').adminGet;
const adminDestoryController = require('../controller').adminDestory
const sessionController = require('../controller').sessionCreator;
const userController = require('../controller').user;
const contactUsController = require('../controller').contactus;
const wallet = require('../controller').wallet;
//home rought
router.get(
    '/api',
    (req, res) => res.status(200).send({message: 'Welcome to the Dairy API!'})
);

//session routes
router.post('/api/getTokan', sessionController.getTokan);

//Tax routes
router.post('/api/addNewTax', adminAddController.addNewTax);
router.post('/api/updateTax', adminUpdateController.updateTax);
router.post('/api/getTax', adminGetController.getTax);
router.post('/api/deleteTax', adminDestoryController.deleteTax);

//catagery routes
router.post('/api/addCatagory', adminAddController.addCatagory);
router.post('/api/updateCatagory', adminUpdateController.updateCatagory);
router.post('/api/getCatagory', adminGetController.getCatagory);
router.post('/api/deleteCatagory', adminDestoryController.deleteCatagory);
router.post('/api/addSubCatagory', adminAddController.addSubCatagory);
router.post('/api/updateSubCatagory', adminUpdateController.updateSubCatagory);
router.post('/api/getSubCatagory', adminGetController.getSubCatagory);
router.post('/api/deleteSubCatagory', adminDestoryController.deleteSubCatagory);
router.get('/api/getAllCategory', adminGetController.getAllCategory);


// product routes
router.post('/api/addProduct', adminAddController.addProduct);
router.get('/api/getAllOrderProduct', adminGetController.getAllInstaProduct);
router.post('/api/getProductbyId', adminGetController.getProductbyId);
router.post('/api/getProductbyBrand', adminGetController.getProductbyBrand);
router.post(
    '/api/getProductbyproductType',
    adminGetController.getProductbyproductType
);
router.post('/api/deleteProduct', adminDestoryController.deleteProduct);
router.post('/api/updateProduct', adminUpdateController.updateProduct);
router.post(
    '/api/getAllSubscriptionsProduct',
    adminGetController.getAllSubscriptionsProduct
);
router.post('/api/getProductbysubCatagory', adminGetController.getProductbysubCatagory);

// vendor routes
router.post('/api/addVendor', adminAddController.addVendor);
router.post('/api/getProductByVendor', adminGetController.getProductByVendor);
router.post('/api/getProductByshopper', adminGetController.getProductByshopper);
router.post('/api/getVendor', adminGetController.getVendor);
router.get('/api/getAllVendor', adminGetController.getAllVendor);
router.post('/api/deleteVendor', adminDestoryController.deleteVendor);
router.post('/api/updateVendor', adminUpdateController.updateVendor);

// Subscription routes
router.post('/api/addSubscription', adminAddController.addSubscription);
router.post(
    '/api/updateSubscription',
    adminUpdateController.updateSubscription
);
router.post('/api/getSubscription', adminGetController.getSubscription);
router.get('/api/getAllSubscriptions', adminGetController.getAllSubscriptions);
router.post(
    '/api/deleteSubscription',
    adminDestoryController.deleteSubscription
);

// Order routes
router.post('/api/addOrder', adminAddController.addOrder);
router.post('/api/getOrderbyUser', adminGetController.getOrderbyUser);
router.get('/api/getAllOrders', adminGetController.getAllOrders);
router.post('/api/getOrderbyId', adminGetController.getOrderbyId);
router.post('/api/deleteOrder', adminDestoryController.deleteOrder);

// Pincode routes
router.post('/api/addPincode', adminAddController.addPinCode);
router.post('/api/getPinCodeByCode', adminGetController.getPinCodeByCode);
router.post('/api/getPinCodeById', adminGetController.getPinCodeById);
router.post('/api/checkPinCovarge', adminGetController.checkPinCovarge);
// Shopper routes
router.post('/api/addShopper', adminAddController.addShopper);
router.post('/api/getShopperByName', adminGetController.getShopperByName);
router.post('/api/getShopperById', adminGetController.getShopperById);
router.get('/api/getAllShoppers', adminGetController.getAllShoppers);
router.post('/api/deleteShopper', adminDestoryController.deleteShopper);
router.post('/api/updateShopper', adminUpdateController.updateShopper);

//user
router.post('/api/signup', userController.signupUser);
router.post('/api/getUserByMobile', userController.getUserByMobile);
router.post('/api/updateUser', userController.updateUser);

//contactus
router.post('/api/saveContactUs', contactUsController.create);
router.get('/api/contactUsAll', contactUsController.listAll);
router.post('/api/getContactUsType', contactUsController.getByType);

//wallet
router.post('/api/createWallet', wallet.processTransaction);
router.post('/api/creditWallet', wallet.processTransaction);
router.post('/api/debitWallet', wallet.processTransaction);
router.post('/api/getBalance', wallet.getBalance);
router.post('/api/getStatment', wallet.getStatment);
router.post('/api/checkAmountAvailable', wallet.checkAmountAvailable);

//Invoice
router.post('/api/getSubscriptionsInvoice', adminGetController.getSubscriptionsInvoice);
router.post('/api/getOrderInvoice', adminGetController.getOrderInvoice);
// router.post('/api/amt', adminGetController.amt);
//router.post('/api/amt1', adminGetController.amt1);

module.exports = router;
