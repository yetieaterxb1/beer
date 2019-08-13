const mysql = require('mysql');
const { MYSQL } = require('../../config.js');


const db = mysql.createConnection({
  user: 'root',
  password: MYSQL,
  database: 'BEERLIST',
});

db.connect();

// get all items
const getAllBeers = () => {
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
const getAllBreweries = () => {
  const query = 'select * from BEERLIST.breweries;'
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
const getAllCategories = () => {
  const query = 'select * from BEERLIST.categories;'
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
const getAllStyles = () => {
  const query = 'select * from BEERLIST.styles;'
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

const addNewBeer = (data) => {
	console.log(data)
  var query = 'insert into beers (brewery_id, name, cat_id, style_id, abv, rating) values (?, ?, ?, ?, ?, ?);'
  var params = [data.brewery_id, data.name, data.cat_id, data.style_id, data.abv, data.rating];
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, item) => {
      if (err) {
        reject(err)
      } else {
        resolve(item)
      }
    });
  });
}
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
  getAllBeers, getAllBreweries, getAllCategories, getAllStyles, addNewBeer
}
