const wood = document.getElementById('wood')
const lake = document.getElementById('lake')
const sun = document.getElementById('sun')
const sunBig = document.getElementById('sunBig')

const newPromise = new Promise((resolve)=> {
    setTimeout(()=> {
        wood.style.width = '40%'
        wood.style.transition = '1s'
        resolve()
    },1000)
}).then(()=> {
    setTimeout(()=> {
       lake.style.width = '70%'
       lake.style.transition = '0.5s'
    },800)
}).then(()=>{
    wood.onclick = () => {
        sunBig.classList.toggle('sunBig')
    }
})

// const arr = [1,3,45,34,12,3,2,1,0,67,3]


// const arrSqrt = arr
//     .map((item) => {
//     return Math.sqrt(item)
// }).reduce((total, item)=> Math.sqrt(total + item))
// console.log(arrSqrt)
//
// const arrSqrt2 = arr.reduce((total, item)=>total + Math.sqrt(item))
// console.log(arrSqrt2)


function hello (){
    console.log('Hello', this)
}
// hello()

// const person = {
//     name: 'Egor',
//     age: 24,
//     sayHello: hello,
//     sayHelloWindow: hello.bind(document),
//     logInfo: function (job,phone) {
//         console.group(`${this.name} info:`)
//         console.log(`Name is ${this.name}`)
//         console.log(`Age is ${this.age}`)
//         console.log(`Job is ${job}`)
//         console.log(`Phone is ${phone}`)
//         console.groupEnd()
//     }
//
// }
// // console.log(person.logInfo())
//
//
//
// const lena = {
//     name: 'Elena',
//     age: 23
// }
//
// const fnLenaInfo = person.logInfo.bind(lena)
//
//
// fnLenaInfo('progg', 385)
//
// person.logInfo.call(lena, 'progg', 385)
// person.logInfo.apply(lena,['progg', 385])
//

const array = [1,2,3,4,5]

// const newFunc = (arr, num) => {
//     return array.map(( item)=> {
//         return  item * num
//     })
// }
Array.prototype.newFunc = function (num) {
    console.log('newFunc',  this)
}

array.newFunc(10)


Array.prototype.newFunc = function (num) {
    return this.map((item)=> {
    return item * num
})
}

console.log(array.newFunc(10))

