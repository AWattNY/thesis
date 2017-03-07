const Models = require('./dbModels');

const fakeStockData = require('./fakeData/fakeStockData.json');
const fakeUserData = require('./fakeData/fakeUserData.json');
const fakeTransactions = require('./fakeData/fakeTransactions.json');
const fakeUserTransactionData = require('./fakeData/fakeUserTransactionData.json');
const fakeUserStocksData = require('./fakeData/fakeUserStocksData.json');

console.log(fakeUserData);

Models.User.bulkCreate(fakeUserData, { individualHooks: true })
.then(() => {
  return Models.User.findAll();
});

Models.Stock.bulkCreate(fakeStockData, { individualHooks: true })
.then(() => {
  return Models.User.findAll();
});


Models.Transaction.bulkCreate(fakeTransactions, { individualHooks: true })
.then(() => {
  return Models.User.findAll();
});


Models.UserTransaction.bulkCreate(fakeUserTransactionData, { individualHooks: true })
.then(() => {
  return Models.User.findAll();
});

Models.UserStock.bulkCreate(fakeUserStocksData, { individualHooks: true })
.then(() => {
  return Models.User.findAll();
});