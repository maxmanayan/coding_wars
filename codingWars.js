const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'}



const tacos = [taco, taco1, taco2]



//// write a function that takes an tacoOBJ and a id
//// and returns a new object with name changed to "changed"

const changeName = (tacoID, tacoOBJ) => {
  const {id, name, price, about} = tacoOBJ

  if(tacoID === id){
    return({...tacoOBJ, name: "changed"})
  } else {
    return(tacoObj)
  }
}

let newName = changeName(3, taco2)
// console.log(newName)



//// write a function that takes an tacoOBJ and return some
//// formatted html (will be a string technically)
const tacoHTML = (tacoOBJ) => {
  const {id, name, price, about} = tacoOBJ

  return(`
    <div>
      <h1>This taco has ${name} and costs $${price}.00!</h1>
    </div>
  `)
}

let newTacoHTML = tacoHTML(taco)
// console.log(newTacoHTML)



//// write a function that takes an tacoOBJ and return formatted price with
//// .00 

const tacoPrice = (tacoOBJ) => {
  const {name,price} = tacoOBJ
  nameCap = name.split(" ").map((name) => name.charAt(" ").toUpperCase() + name.slice(1)).join(" ")
  return(`${nameCap} Taco) $${price}.00`)
}

let formatPrice = tacoPrice(taco1)
// console.log(formatPrice)


//// create a new array where all of the prices is formatted with .00
const reformatPrice = (tacoArr) => {
  return tacoArr.map((taco) => {
    return {...taco, price: `$${taco.price}.00`}
  })
}

let newTacoArr = reformatPrice(tacos)
// console.log(newTacoArr)



//// write a function that takes an array and logs each item in the array
//// hint forEach
const logTacoArr = (tacoArr) => {
  return tacoArr.forEach((tacoItem)=>{
    const {id, name, price, about} = tacoItem
    nameCap = name.split(" ").map((name)=>name.charAt(0).toUpperCase() + name.slice(1)).join(" ")
    console.log(`${id}) ${nameCap} [$${price}.00] ~${about}~`)
  })
}

// logTacoArr(tacos)

//// use the find method to return the object with id:1
const getTaco = (tacoArr) => {
  return tacoArr.find(tacoItem => tacoItem.id === 1)
}

let foundTaco = getTaco(tacos)
// console.log(foundTaco)



//// return a new array with all prices greater than 19
const expensiveTacos = (tacoArr) => {
  return tacoArr.filter((tacoItem)=>{
    const {id, name, price, about} = tacoItem
    if(price > 19)
      return tacoItem
  })
}

let expensiveTacoArr = expensiveTacos(tacos)
console.log(expensiveTacoArr)



// return a new array with a 'about' key where it is a combo of
// name price and about





///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own