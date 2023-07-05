let arr = ["name" , "meme" , "fame"]

let arrNew = arr.map(el =>{
    let els =  el.replace("me" , "")
    return els
})
console.log(arrNew)