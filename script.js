const data = {
  top: 10,
  left: 10,
  bottom: 0,
  countItem: 10,
  mainBoard: document.querySelector(".mainBoard"),
  cards: document.querySelector(".cards"),
  inputValue: document.getElementById("inputValue"),
  inputTitleValue: document.getElementById("inputTitleValue"),
  submit: document.querySelector(".submit"),
  index: 9,
};

class Item {
  constructor() {
    // Create 10 elem "div" with class "block" and add to div class "MainBoard"
    for (let i = 0; i < data.countItem; i++) {
      this.elem = document.createElement("div");
      this.elem.classList.add("block");
      data.left = data.left + 2;
      data.top = data.top + 2;
      this.elem.style.left = `${data.left}px`;
      data.cards.appendChild(this.elem);
    }
  }

  //realize move method for a div block
  moveElem() {
    const divAll = document.querySelectorAll(".block");
    // document.body.addEventListener('mousemove', (e) => {
    //     console.log(e.clientX, e.offsetY);
    // })

    divAll.forEach((divOne) => {
      let posX;
      let posY;
      let flag = false;
      let zIndex = 0;

      divOne.addEventListener("mousedown", (e) => {
        posX = e.offsetX;
        posY = e.offsetY;
        divOne.classList.add("newBoxStyle");

        divOne.style.zIndex = ++zIndex;
        flag = true;
        // console.log("x:" + posX, "y:" + posY)
      });
      divOne.addEventListener("mousemove", (e) => {
        if (flag) {
          divOne.style.left = `${
            e.clientX - posX - data.mainBoard.offsetLeft
          }px`;
          divOne.style.top = `${e.clientY - posY}px`;
          // console.log("x:" + e.clientX, "y:" + e.clientY)
        }
      });
      divOne.addEventListener("mouseout", () => {
        flag = false;
      });

      divOne.addEventListener("mouseup", (e) => {
        divOne.classList.remove("newBoxStyle");

        flag = false;
      });
    });
  }

  // wybór elementa
  chooseElem() {
    const divAll = document.querySelectorAll(".block");
    divAll.forEach((item, index) => {
      item.addEventListener("click", function () {
        data.index = index;
      });
    });
  }
  //Line through add class
  alreadyDone() {
    const liItem = [...document.querySelectorAll("li")];
    console.log(liItem);
    liItem.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.add("lineThrough");
      });
    });
  }

  // work on the input form
  changeInput() {
    const blockAll = [...document.querySelectorAll(".block")];
    for (let i = 0; i < blockAll.length; i++) {
      let h2 = document.createElement("h2");
      let ul = document.createElement("ul");
      blockAll[i].appendChild(h2);
      blockAll[i].appendChild(ul);
    }

    data.inputValue.addEventListener("focusin", () => {
      data.inputValue.value = "";
      item.chooseElem();
      console.log(data.index);
    });

    // data.inputValue.addEventListener('focusout', () => {
    //     data.inputValue.value = value;
    // })

    data.submit.addEventListener("click", (e) => {
      let num = data.index + 1;
      let h2 = document.querySelector(`.block:nth-of-type(${num})>h2`);
      if (h2.textContent == "") {
        h2.textContent = data.inputTitleValue.value;
        data.inputTitleValue.value = "";
      } else {
        alert("your title already exist");
        data.inputTitleValue.value = "";
      }
      if (data.inputValue.value != "") {
        const li = document.createElement("li");
        document
          .querySelector(`.block:nth-of-type(${num})>ul`)
          .appendChild(li).textContent = data.inputValue.value;
        data.inputValue.value = "";
      }
      item.alreadyDone();
    });
  }
}

const item = new Item();
item.changeInput();
item.moveElem();
