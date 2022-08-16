const wood = document.getElementById('wood')
const lake = document.getElementById('lake')

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
})