const fetch = require("node-fetch");

const categoriesUrl = 'https://opentdb.com/api_category.php';
const url = 'https://opentdb.com/api.php?amount=2&category='


fetch(`${categoriesUrl}`)
  .then(data => data.json())
  .then(data => {
    return data.trivia_categories
  })
  .then(data => data.map(elem => {
    return elem.id
  }))
  //.then(arr => console.log(arr))
  .then(arr => random(arr))
  .then(num => {
    console.log(num);
    fetch(`${url}${num}`)
      .then(data => data.json())
      .then(data => {
        return data.results
      })
      .then(data => data.forEach(elem => console.log("Question:" + elem.question)))
  })
  .catch(err => console.log(err))

const random = (arr) => {
  let length = arr.length;
  let ranNum = Math.floor(Math.random() * length)
  return arr[ranNum]
}

//fetch(`${url}13`)
//  .then(data => data.json())
//  .then(data => {
//    return data.results
//  })
//  .then(data => data.forEach(elem => console.log("Question:" + elem.question)))