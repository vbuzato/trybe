db.transactions.aggregate([{ $match: { bank: /international/i } }]);

// 1 - Selecione todas as transações feitas pelo cliente chamado "Dave America";

db.transactions.aggregate([
  {
    $match: {
      $or: [
        { from: /Dave America/i },
        { to: /Dave America/i }
      ]
    }
  }
]);

// 2 - Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";

db.transactions.aggregate([
  {
    $match: {
      $or: [
        { value: { $gt: 700, $lt: 6000 } },
        { to: "Lisa Simpson" }
      ]
    }
  }
]);

// 3 - Selecione três transações com o valor acima de 1000.

db.transactions.aggregate([
  { $match: { value: { $gt: 1000 } } },
  { $limit: 3 }
]);

// insert >>

db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

// Selecione todos os clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions"
    }
  }
]).pretty();

// Selecione quatro clientes com as suas respectivas transações recebidas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions"
    }
  },
  { $limit: 4 }
]).pretty();

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
  {
    $match: {
      State: "Florida"
    }
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions"
    }
  }
]).pretty();

