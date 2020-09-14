//  PseudoCode

// pobieranie listy

const listItems = document.querySelectorAll('.paperList > li');

let mouseXpos = 0;
let mouseYpos = 0;

// getter for X and Y mouse coordinates
const getMousePos = () => {
    let arr = document.body.addEventListener('mousemove', (e) => {
        mouseXpos = e.clientX;
        mouseYpos = e.clientY;
        console.log(mouseYpos, mouseXpos);
    })
}

getMousePos();

listItems.forEach(item => {
    item.addEventListener('drag', )
})
document.body.addEventListener('mousemove', () => {
    console.log(mouseYpos, mouseXpos);
})