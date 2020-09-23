const data = {
    top: 10,
    left: 10,
    countItem: 10,
    mainBoard: document.querySelector(".mainBoard"),
    cards: document.querySelector(".cards"),
    inputValue: document.getElementById('inputValue'),
    submit: document.getElementById('submit'),
    index: 9,

}




class Item {
    constructor() {
        // Create 10 elem "div" with class "block" and add to div class "MainBoard" 
        for (let i = 0; i < data.countItem; i++) {
            this.elem = document.createElement('div');
            this.elem.classList.add('block');
            data.left = data.left + 2;
            data.top = data.top + 2;
            this.elem.style.left = `${data.left}px`;
            this.elem.style.top = `${data.top}px`;
            data.cards.appendChild(this.elem);
            this.elem.textContent = i;

        }
    }
    //realize move method for a div block
    moveElem() {
        const divAll = document.querySelectorAll('.block');
        // document.body.addEventListener('mousemove', (e) => {
        //     console.log(e.clientX, e.offsetY);
        // })

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
                // console.log("x:" + posX, "y:" + posY)

            })
            divOne.addEventListener('mousemove', (e) => {
                if (flag) {
                    divOne.style.left = `${e.clientX-posX - data.mainBoard.offsetLeft}px`;
                    divOne.style.top = `${e.clientY-posY}px`
                    // console.log("x:" + e.clientX, "y:" + e.clientY)
                }
            })
            divOne.addEventListener('mouseout', () => {
                flag = false;
            })

            divOne.addEventListener('mouseup', (e) => {
                divOne.style.backgroundColor = " #1dd1a1"
                flag = false;
            })
        })
    }


    // wybór elementa
    chooseElem() {
        const divAll = document.querySelectorAll('.block');


        divAll.forEach((item, index) => {
            item.addEventListener('click', function () {
                data.index = index;
            })
        })

    }

    // work on the input form 
    changeInput() {
        const value = data.inputValue.value;
        const blockAll = [...document.querySelectorAll('.block')];
        for (let i = 0; i < blockAll.length; i++) {
            let ul = document.createElement('ul');

            blockAll[i].appendChild(ul);
        }

        data.inputValue.addEventListener('focusin', () => {
            data.inputValue.value = "";
            item.chooseElem();
            console.log(data.index)
        })

        // data.inputValue.addEventListener('focusout', () => {
        //     data.inputValue.value = value;
        // })

        data.submit.addEventListener('click', (e) => {
            if (data.inputValue.value != "") {
                let num = data.index + 1;
                const li = document.createElement('li');
                document.querySelector(`.block:nth-of-type(${num})>ul`).appendChild(li).textContent = data.inputValue.value;
                data.inputValue.value = "";
            }
        })
    }

}


const item = new Item();
item.changeInput();
item.moveElem();