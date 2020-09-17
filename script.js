const data = {
    top: 10,
    left: 10,
    countItem: 10,
    mainBoard: document.querySelector(".mainBoard"),
}




class Item {
    constructor() {
        // Create 10 elem "div" with class "block" and add to div class "MainBoard" 
        for (let i = 0; i < data.countItem; i++) {
            this.elem = document.createElement('div');
            this.elem.classList.add('block');
            data.left = data.left + 100;
            this.elem.style.left = `${data.left}px`;
            data.mainBoard.appendChild(this.elem);
            this.elem.textContent = i;
        }
    }

    moveElem() {
        const divAll = document.querySelectorAll('.block');
        divAll.forEach(divOne => {
            let posX;
            let posY;
            let flag = false;
            let zIndex = 0;

            divOne.addEventListener('mousedown', (e) => {
                posX = e.offsetX;
                posY = e.offsetY;
                divOne.style.backgroundColor = "gray";
                divOne.style.zIndex = ++zIndex;
                flag = true;
                console.log("x:" + posX, "y:" + posY)

            })
            divOne.addEventListener('mousemove', (e) => {
                if (flag) {
                    divOne.style.left = `${e.clientX-posX}px`;
                    divOne.style.top = `${e.clientY-posY}px`

                    console.log("x:" + e.clientX, "y:" + e.clientY)
                }
            })

            divOne.addEventListener('mouseup', (e) => {
                divOne.style.backgroundColor = " #1dd1a1"
                flag = false;
            })
        })
    }

}


const item = new Item();
item.moveElem();