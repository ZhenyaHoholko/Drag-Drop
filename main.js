const item= document.querySelector('.item')
const placeholders=document.querySelectorAll('.placeholder')

item.addEventListener("dragstart",dragstart)
item.addEventListener("dragend",dragend)

for( const placeholder of placeholders){
    placeholder.addEventListener("dragover",dragover) // над placeholder куда можем посестить
    placeholder.addEventListener("dragenter",dragenter) //когда заходим на территорию этого placeholder
    placeholder.addEventListener("dragleave",dragleave) // когда перетащили и вышли отттуда
    placeholder.addEventListener("drop",dragdrop) // когда отпустили
}

function dragstart(event) {
    event.target.classList.add("hold")
    setTimeout(()=>event.target.classList.add("hide"),0)
}

function dragend(event) {
    event.target.className='item'
}


function dragover(event) {
    event.preventDefault()
    // event.preventDefault()
    // console.log("drag over")
}
function dragenter(event) {
    event.target.classList.add('hovered')
    console.log("drag enter")
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}