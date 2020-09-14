//  PseudoCode

// pobieranie listy

const listItems = document.querySelectorAll('.paperList > li');

let mouseXpos = 0;
let mouseYpos = 0;

// getter for X and Y mouse coordinates
const getMousePos = () => {
    let arr = document.body.addEventListener('mousemove', (e) => {
        mouseXpos = e.offsetX;
        mouseYpos = e.offsetY;
        console.log(mouseXpos, mouseYpos);
    })
}

getMousePos();

listItems.forEach((item =>
    item.addEventListener('mousedown', () => {
        item.style.transform = "translate(" + mouseXpos + "px" + "," + mouseYpos + "px)";

        console.log(item);
    })
))


document.body.addEventListener('mousemove', () => {
    console.log(mouseYpos, mouseXpos);
})