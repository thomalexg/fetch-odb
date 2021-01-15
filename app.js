const fetch = require("node-fetch");

const categoriesUrl = 'https://opentdb.com/api_category.php';
const url = 'https://opentdb.com/api.php?amount=2&category='


//fetch(`${categoriesUrl}`)
//  .then(data => data.json())
//  .then(data => {
//    return data.trivia_categories
//  })
//  .then(data => data.map(elem => {
//    return elem.id
//  }))
//  //.then(arr => console.log(arr))
//  .then(arr => random(arr))
//  .then(num => {
//    console.log(num);
//    fetch(`${url}${num}`)
//      .then(data => data.json())
//      .then(data => {
//        return data.results
//      })
//      .then(data => data.forEach(elem => console.log("Question:" + elem.question))//)
//  })
//  .catch(err => console.log(err))

const random = (arr) => {
  let length = arr.length;
  let ranNum = Math.floor(Math.random() * length)
  return arr[ranNum]
}

const renderQuestion = async _ => {
  const categories = await fetch(categoriesUrl);
  const categoriesJson = await categories.json();
  const categoriesObj = await categoriesJson.trivia_categories;
  const mapIds = await categoriesObj.map(elem => {
    return elem.id
  })
  const randomNum = await random(mapIds)
  const getQuestion = await fetch(`${url}${randomNum}`)
  const questionJson = await getQuestion.json();
  const results = await questionJson.results;
  const question = await results.forEach(elem => console.log(elem.question))
  // console.log(question)
}

renderQuestion();














//fetch(`${url}13`)
//  .then(data => data.json())
//  .then(data => {
//    return data.results
//  })
//  .then(data => data.forEach(elem => console.log("Question:" + elem.question)))