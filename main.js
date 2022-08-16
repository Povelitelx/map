// const newRequest = 'https://jsonplaceholder.typicode.com/users'
//
// const xhr = new XMLHttpRequest()
//
// xhr.open('GET', newRequest)
//
// xhr.responseType = 'json'
//
// xhr.onload = () =>{
//     if (xhr.status >= 400){
//         console.error(xhr.response)
//     } else {
//         console.log(xhr.response)
//     }
//
// }
//
// xhr.onerror = () => {
//     console.log(xhr.response)
// }
//
// xhr.send()

// _________________________Запросы на сервер_________________________

// const newRequest = 'https://jsonplaceholder.typicode.com/users'
//
// const xhr = new XMLHttpRequest()
//
// xhr.open('GET', newRequest)
//
// xhr.responseType = 'json'
//
// xhr.onload =  () => {
//     if (xhr.status >=400) {
//         console.error(xhr.response)
//     } else console.log(xhr.response)
// }
//
// xhr.send()

// _________________________Запросы на сервер_________________________


// _____________________________Асинхронность___________________________

// console.log("start")
//
// const twosec = () => {
//     console.log('twosec')
// }
//
// window.setTimeout(function () {
//     console.log('Inside Timeout, after 2000 seconds')
// }, 5000)
//
// window.setTimeout(twosec, 2000)
//
// console.log('end')

// _____________________________Асинхронность___________________________

//______________________________Promise__________________________________


// console.log('Request data...')

// setTimeout(() => {
//     console.log('preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     },2000)
//
// },2000)

// ___________________________________ Пример промисов _____________________________
// console.log('Request data...')
// const p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('preparing data')
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData)
//     },2000)
//
// })
//
// p.then((data) => {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         },2000)
//     })
// })
//     .then((clientData)=> {
//     console.log('Data received', clientData)
//     return clientData
//
// }).then((data)=> {
//     console.log('Modified', data)
// })
//     .catch(err => console.error('Error: ',err))
//     .finally(() => console.log('Finally'))


// console.log('Request data...')
// const sleep = (ms)=> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }

// sleep(2000).then(()=> console.log('after 2 second'))
// sleep(3000).then(()=> console.log('after 3 second'))


// Promise.all([sleep(2000), sleep(5000)])
//     .then(()=> {
//         console.log('All promises')
//     })
//
// Promise.race([sleep(2000), sleep(5000)]).then(()=> {
//     console.log('Race promises')
// })


// ___________________________________пытаюсь что то сделать сам c promise_______________________________
const hello = document.getElementById('green')
const fontSize = document.getElementById('35px')
const border = document.getElementById('border')
const b = new Promise((resolve,)=>{
 setTimeout(()=> {
     hello.classList.add('newClass')
     console.log(hello)
     hello.style.color = 'green'
     hello.style.transition = '0.2s'
     resolve()
 },1500)
}).then(()=> {
    setTimeout(()=> {
        console.log(fontSize)
        fontSize.style.fontSize = '70px'
        fontSize.style.transition = '0.8s'
    },1500)
}).then(()=> setTimeout(()=> {
    console.log(border)
    border.style.border = '6px solid red'
    border.style.boxShadow = '8px 8px 20px black'
    border.style.transition = '0.5s'
},1500))

b.finally(()=> {
    console.log('Its okay')
})


// ______________________________ методы массивов ______________________________




//___________map______________________

const arr = [1, 34, 56, 30, 12, 0, 1, 28]

const Map = arr.map((item) => {
    return item * 20

})
console.log( Map)



let myMapResult = []

const myMap = (array) => {
    for (let i = 0; i < arr.length; i++) {
      myMapResult.push(array[i] * 20)
    }
return myMapResult
}

console.log(myMap(arr))


//___________map______________________




//___________filter______________________

const arr2 = [1, 34, 56, 30, 12, 0, 1, 28]

const Filter = arr2.filter((item)=> {
    return item > 10
})

console.log(Filter)


let myFilterResult = []

const myFilter = (array) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr2[i] > 10){
            myFilterResult.push(array[i])
        }
    }
    return myFilterResult
}

console.log(myFilter(arr2))

//___________filter______________________


//___________reduce______________________
const arr3 = [1, 34, 56, 30, 12, 0, 1, 28]

const Reduce = arr3.reduce((total, item)=> {
    return total + item
},0)

console.log(Reduce)



let total = 0

const myReduce = (array) => {
    for (let i = 0; i < arr.length; i++) {
       total += array[i]
    }
return total
}

console.log(myReduce(arr3))















