let user_name = "Vadim"
let name2 = "Vadim"

// console.log(name2)

let age = 32
// console.log(age)


// let person = user_name + " " + age
// console.log(person)

let user_age = 30
let work_period = 10

// let total_time = user_age / work_period
// console.log("total_time =",   total_time)

let morning = false
console.log("morning = ", morning, typeof(morning))

let evening = true
console.log("evening = ", evening , typeof(evening))

let apples = 15
let cherry = 5

let compare = apples >= cherry
console.log("compare =", compare)

if (compare){
    console.log("compare is", compare)
} else if (apples == 15){
 console.log("apples == ", apples)
} else {
    console.log("!!compare is", false)
}

console.log("hello")

console.log(true || false || false)
console.log(true && false || true && true)

if (false || true || false) {
    console.log("1")
} else{
    console.log("2")
}


let age = 17
let money = 900
let dog = true

if (age >= 18 && money >= 1000 && dog ){
    console.log("Get ticket")
} else if (age < 18) {
    console.log("Early")
} else if (money < 1000){
 console.log("Keep calm and work hard")
} else if (!dog){
    console.log("Get Cat")
}