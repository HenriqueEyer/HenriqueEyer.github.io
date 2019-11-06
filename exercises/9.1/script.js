
// window.onload = function () {
//     if (typeof (Storage) != "undefined") {
//         let views = Number(localStorage.getItem("views"))
//         if (views) {
//             views += 1
//             localStorage.setItem("views", views)
//         } else {
//             localStorage.setItem("views", 1)
//         }
//         let span = document.querySelector("span.views")
//         span.innerHTML = `Número de visitas: ${localStorage.getItem("views")}`

//         let color = localStorage.color
//         if (color) document.body.style.backgroundColor = color
//     } else {
//         document.write("Sem suporte para Web Storage")
//     }

//     let buttons = document.querySelectorAll("button")
//     for (let button of buttons) {
//         button.addEventListener("click", event => {
//             let color = event.target.innerHTML
//             localStorage.setItem("color", color)
//             document.body.style.backgroundColor = color
//         })
//     }
// }
window.onload = () => {
  
const returnByid = name => document.getElementById(name)
const returnByClassName = name => document.getElementsByClassName(name)
const setNewKey=({id,value})=>localStorage.setItem(id,value)
const setStyle=(changeStyle,valueStyle)=>document.body.style[changeStyle]=valueStyle

for(let value of Object.keys(localStorage)){
    setStyle(value,localStorage.getItem(value))
}

function allValues(){
    let values=returnByClassName('values');
    
    for(let val of values){
       if(val.value){
           setNewKey(val)
           setStyle(val.id,val.value)
       } 
    }
    
    // returnByClassName('values').map(({value,id})=>({[id]:value}))
}

returnByid('btnSave').addEventListener('click',event=>{
    allValues();
})

}