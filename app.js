const cursor = document.querySelector(".cursor")
const holes= [...document.querySelectorAll(".hole")]

function run(){
    const i = Math.floor(Math.random()* holes.length)
    const hole = holes[i]

    const img = document.createElement("img")
    img.classList.add('mole')
    img.src = "assets/mole.png"

    img.addEventListener('click',()=>{
        alert(0)
    })

    hole.appendChild(img)
}
run()
window.addEventListener("mousemove",e =>{
    cursor.style.top = e.pageY+"px";
    cursor.style.left = e.pageX+"px";
})
window.addEventListener("mousedown",()=>{
    cursor.classList.add("active")
})
window.addEventListener("mouseup",()=>{
    cursor.classList.remove("active")
})