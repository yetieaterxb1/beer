const mysql = require('mysql');
const { MYSQL } = require('../../config.js');


const db = mysql.createConnection({
  user: 'root',
  password: MYSQL,
  database: 'BEERLIST',
});

db.connect();

// get all items
const getAllItems = () => {
  const query = 'select * from BEERLIST.beers;'
  return new Promise((resolve, reject) => {
    db.query(query, (err, items) => {
      if (err) {
        reject(err);
      } else {
        resolve(items)
      }
    })
  })
}

// const addItem = (data) => {
//   var query = 'insert into list (category, item) values (?, ?);'
//   var params = [data.category, data.item];
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (err, item) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(item)
//       }
//     });
//   });
// }
// ​
// const deleteItem = (data) => {
//   var query = 'delete from list where item = ?;'
//   var params = data.value;
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (err, item) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(item)
//       }
//     })
//   })
// }
//
// // const editItem = (data) => {
// //   var query = 'update list set item = ? where item = ?;'
// //   var params = [data.]
// // }
//
// const updateItem = (data) => {
//   var query = 'update list set completed = ? where item = ?;'
//   var params = [!data.completed, data.item];
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (err, updatedItem) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(updatedItem)
//       }
//     })
//   })
// }

module.exports = {
  getAllItems,
  // addItem,
  // deleteItem,
  // updateItem
}
