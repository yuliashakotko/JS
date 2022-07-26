// let user_name = "Vadim"
// let name2 = "Vadim"

// // console.log(name2)

// // let age = 32
// // console.log(age)


// // let person = user_name + " " + age
// // console.log(person)

// let user_age = 30
// let work_period = 10

// // let total_time = user_age / work_period
// // console.log("total_time =",   total_time)

// let morning = false
// console.log("morning = ", morning, typeof(morning))

// let evening = true
// console.log("evening = ", evening , typeof(evening))

// let apples = 15
// let cherry = 5

// let compare = apples >= cherry
// console.log("compare =", compare)

// if (compare){
//     console.log("compare is", compare)
// } else if (apples == 15){
//  console.log("apples == ", apples)
// } else {
//     console.log("!!compare is", false)
// }

// console.log("hello")

// console.log(true || false || false)
// console.log(true && false || true && true)

// if (false || true || false) {
//     console.log("1")
// } else{
//     console.log("2")
// }


// let dog_show = true
// let age = 18
// let money = 900
// let dog = false

// if (age >= 18 && money >= 1000 && dog ){
//     console.log("Get ticket")
// } else {if (age < 18) {
//     console.log("Early")
// }      if (money < 1000){
//  console.log("Keep calm and work hard")
// }      if (!dog){
//     console.log("Get Cat")
// }}

// switch(dog_show) {
//     case age >= 18 : 
//     console.log("Time to win")
//     // break;
//     case money >= 1000 : 
//     console.log("Rich")
//     break;
// }

// // count = 0
// // while(count < 10){
// //     // console.log(count, "Win!!!")
// //     if (count % 2 == 0){
// //     console.log(count, "even")
// //     }
// //     count ++
// // }

// mm = ["Alla", "Nataliia", "Milana", "Anatoliy","Dmitriy"]
// for (let i = 0; i < mm.length; i++){
//     let b = i
//     b++
//     console.log(b, i, mm[i], "WIN!!!")
// }

function yolochka(){
    let text_1 = "Hello world"
    console.log(text_1)
}

function yolochka1(q1, q2){
    
    if (q1 > 4){
        let m_result = q2*10
        console.log(m_result)
    }
}
yolochka()
yolochka1(5,10)

// names = ['Alex', 'Inna', 'Vadim', 'Anatoliy','Natalia']
// function names_editor(person_name){
//     let name_1 = "Hello " + person_name + " !"
//     console.log(name_1)
// }

// for (let i=0; i<names.length; i++){
//     names_editor(names[i])
// }

// let f1 = () => console.log('-----')
// // f1
// let t1 = 10;
// let t2 = 15;
// let t3 = 20;

// let summ = (n1, n2) => {console.log(`Summ = ${n1 + n2}`)}
// summ(t1,t2)

// function yolochka_pro(){}

// yolochka_pro.prototype.method_1 = function(){
//     console.log('method_1')
// }
// yolochka_pro.prototype.method_2 = function(tt1, tt2){
//     console.log(`method_2 = ${tt1 + tt2}`)
// }

// let wood = new yolochka_pro()

// wood.method_1()
// wood.method_2(10, 20)


let t1 = 7;
let f3 = (t1 > 10) ?
    (tt1, tt2) => console.log(tt1 + tt2) :
    (tt1, tt2) => console.log(tt1 - tt2);

f3(10, 30)