let pizzaMenu = [{
            name: "\"Фитнес\"",
            ingredients: ["Курица", "Сыр \"Чеддер\"", "Перец болгарский", "Помидор", "Укроп", "Томатный соус", "Сладкий соус чили"],
            calories: "1033",
            price: "56.00",
            imgSrc: "./images/pizza1.png"
        }, {
            name: "\"Баварская\"",
            ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Огурец соленый", "Помидор", "Оливки", "Кетчуп", "Специи итальянские"],
            calories: "1500",
            price: "60.00",
            imgSrc: "./images/pizza2.png"
        }, {
            name: "\"Фирменная\"",
            ingredients: ["Курица", "Сыр \"Чеддер\"", "Ветчина", "Майонез", "Грибы", "Томатный соус", "Маслины"],
            calories: "1279",
            price: "54.00",
            imgSrc: "./images/pizza3.png"
        }, {
            name: "\"Салями\"",
            ingredients: ["Салями", "Сыр \"Чеддер\"", "Томатный соус с чесноком", "Огурцы соленые", "Укроп", "Майонез"],
            calories: "1450",
            price: "54.00",
            imgSrc: "./images/pizza4.png"
        }, {
            name: "\"Курица с ананасом\"",
            ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Томатный соус", "Ананас", "Майонез", "Оливки"],
            calories: "1330",
            price: "52.00",
            imgSrc: "./images/pizza5.png"
        }, {
            name: "\"Курица с грибами\"",
            ingredients: ["Курица", "Сыр \"Чеддер\"", "Грибы", "Майонез", "Грибы", "Томатный соус"],
            calories: "1429",
            price: "54.00",
            imgSrc: "./images/pizza6.png"
        },
        {
            name: "\"С грибами\"",
            ingredients: ["Грибы", "Сыр \"Чеддер\"", "Томатный соус", "Майонез"],
            calories: "970",
            price: "44.00",
            imgSrc: "./images/pizza7.png"
        }, {
            name: "\"С ветчиной\"",
            ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Майонез", "Томатный соус"],
            calories: "1320",
            price: "56.00",
            imgSrc: "./images/pizza8.png"
        }, {
            name: "\"Охотничья\"",
            ingredients: ["Охотничьи колбаски", "Сыр моцарелла", "Шампиньоны", "Сладкий лук", "Соус BBQ"],
            calories: "1679",
            price: "72.00",
            imgSrc: "./images/pizza9.png"
        },
        {
            name: "\"Маргарита\"",
            ingredients: ["Томаты", "Сыр моцарелла", "Базилик", "Соус Pomodoro", "Орегано"],
            calories: "840",
            price: "42.00",
            imgSrc: "./images/pizza10.png"
        }, {
            name: "\"Кальцоне\"",
            ingredients: ["Ветчина", "Шампиньйоны", "Сыр моцарелла", "Томаты", "Орегано"],
            calories: "1300",
            price: "62.00",
            imgSrc: "./images/pizza11.png"
        }, {
            name: "\"Берлускони\"",
            ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Базилик", "Перец болгарский", "Помидор", "Томатный соус", "Оливки"],
            calories: "1129",
            price: "54.00",
            imgSrc: "./images/pizza12.png"
        },
        {
            name: "\"Американо\"",
            ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Перец болгарский", "Базилик", "Майонез", "Томатный соус"],
            calories: "1150",
            price: "57.00",
            imgSrc: "./images/pizza13.png"
        }, {
            name: "\"Четыре сыра\"",
            ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Огурец соленый", "Помидор", "Оливки"],
            calories: "1200",
            price: "58.00",
            imgSrc: "./images/pizza14.png"
        }, {
            name: "\"Гурмео\"",
            ingredients: ["Курица", "Сыр \"Чеддер\"", "Ветчина", "Майонез", "Грибы", "Томатный соус", "Маслины"],
            calories: "1100",
            price: "50.00",
            imgSrc: "./images/pizza15.png"
        }, {
            name: "\"Полло\"",
            ingredients: ["Салями Пепперони", "Сыр \"Чеддер\"", "Перец болгарский", "Помидор", "Укроп", "Томатный соус", "Сладкий соус чили"],
            calories: "1000",
            price: "58.00",
            imgSrc: "./images/pizza16.png"
        }, {
            name: "\"Карбонара\"",
            ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Маслины", "Кетчуп", "Специи итальянские"],
            calories: "1600",
            price: "64.00",
            imgSrc: "./images/pizza17.png"
        }, {
            name: "\"Пепперони\"",
            ingredients: ["Салями Пепперони", "Сыр моцарелла", "Огурец соленый", "Соус Pomodoro"],
            calories: "1800",
            price: "70.00",
            imgSrc: "./images/pizza18.png"
        }
    ],
    ingredientsArr = [],
    wrapper = document.querySelector("#main-wrapper"),
    pizza_container = document.querySelector(".pizza-container"),
    selectedName = "",
    ascRadio,
    descRadio,
    modal,
    textArea,
    currentName,
    currentConsist,
    currentPrice,
    currentCalories;

let allIngredients = {
    "Курица": {
        price: "25",
        calories: "20"
    },
    "Сыр моцарелла": {
        price: "15",
        calories: "30"
    },
    "Огурец соленый": {
        price: "5",
        calories: "15"
    },
    "Соус Pomodoro": {
        price: "5",
        calories: "10"
    },
    "Ветчина": {
        price: "25",
        calories: "30"
    },
    "Сыр \"Чеддер\"": {
        price: "15",
        calories: "40"
    },
    "Перец болгарский": {
        price: "5",
        calories: "10"
    },
    "Помидор": {
        price: "5",
        calories: "15"
    },
    "Укроп": {
        price: "5",
        calories: "5"
    },
    "Томатный соус": {
        price: "5",
        calories: "10"
    },
    "Сладкий соус чили": {
        price: "5",
        calories: "10"
    },
    "Маслины": {
        price: "15",
        calories: "20"
    },
    "Кетчуп": {
        price: "15",
        calories: "20"
    },
    "Колбаска сырокопченная": {
        price: "30",
        calories: "50"
    },
    "Оливки": {
        price: "10",
        calories: "30"
    },
    "Базилик": {
        price: "5",
        calories: "20"
    },
    "Укроп": {
        price: "5",
        calories: "20"
    },
    "Майонез": {
        price: "5",
        calories: "30"
    },
    "Шампиньйоны": {
        price: "15",
        calories: "50"
    },
    "Охотничьи колбаски": {
        price: "20",
        calories: "60"
    },
    "Сладкий лук": {
        price: "5",
        calories: "20"
    },
    "Соус Pomodoro": {
        price: "5",
        calories: "20"
    },
    "Томаты": {
        price: "5",
        calories: "10"
    },
    "Орегано": {
        price: "5",
        calories: "10"
    },
    "Соус BBQ": {
        price: "5",
        calories: "10"
    },
    "Ананас": {
        price: "5",
        calories: "20"
    }
};

let staticArray = Array.from(pizzaMenu);

function fillIngredients(arr) {
    for (let pizza of pizzaMenu) {
        pizza.ingredients.filter(x => !arr.includes(x)) // check if an ingredient is already in the array
            .map(x => arr.push(x)) // if not --> push
    }
}

fillIngredients(ingredientsArr);

function createElem(tag, className, container, text) {
    let elem = document.createElement(`${tag}`);
    elem.className = className;
    // Check if we have text to insert
    if (text) {
        elem.innerHTML = text
    }
    // Check if we have container to push in
    if (container) {
        container.appendChild(elem);
    } else {
        document.body.appendChild(elem)
    };

    return elem;
};

function destroyWrapper() {
    while (pizza_container.firstChild) {
        pizza_container.removeChild(pizza_container.firstChild)
    }
};

function find(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name == value) return i;
    }
  
    return -1;
  }

//Choosing an option - ascending or descending
function checkRadio() {
    if (!ascRadio.checked && !descRadio.checked) {
        return 0;
    } else
    if (ascRadio.checked) {
        return "ascending";
    } else
    if (descRadio.checked) {
        return "descending";
    }
}


function mySort(arr, by) {
    function compareItems(prev, next) {
        if (by === "price") {
            return prev.price.split(".")[0] - next.price.split(".")[0];
        } else if (by === "name") {
            if (prev.name.toLowerCase() > next.name.toLowerCase()) {
                return 1;
            }
            if (prev.name.toLowerCase() < next.name.toLowerCase()) {
                return -1;
            }
            // if prev.name equals next.name
            return 0;
        }

    }
    checkRadio() === "ascending" ? arr.sort(compareItems) :
        checkRadio() === "descending" ? arr.sort(compareItems).reverse() :
        alert("Выберите вид сортировки (по убыванию / по возрастанию)")
}

function createGrid(arr, ingredientItem) {
    //removing all items from container
    destroyWrapper();
    // adding class to stylize as grid
    pizza_container.classList.add("pizza-container");

    // filter button for ingredients
    let filterWrapper = createElem("div", "filter-wrapper", pizza_container);
    let filterTitle = createElem("div", "filter-title", filterWrapper, "<strong>Фильтровать по одному из ингридиентов:</strong>");
    let filterSelect = createElem("select", "filter-select", filterWrapper);
    filterSelect.setAttribute("size", ingredientsArr.length);
    ingredientsArr.map(x => {
        createElem("option", "", filterSelect, x);
    });

    // Creating Modal
    modal = createElem("div", "modal", wrapper);
    let modal_content = createElem("div", "modal-content", modal);
    createElem("span", "close", modal_content, "&times");
    createElem("div", "modal-title", modal_content, "<strong>Состав:</strong>");
    textArea = createElem("textarea", "edit-field", modal_content);
    textArea.setAttribute("placeholder", "Edit here...");
    textArea.setAttribute("cols", "30");
    textArea.setAttribute("rows", "5");

    let pizza_cards = createElem("div", "pizza-cards", pizza_container);
    for (let pizza of arr) {
        //check if pizza contains such an ingredient, true --> display
        if (pizza.ingredients.includes(ingredientItem) || ingredientItem === null) {
            let pizza_flipper = createElem("div", "pizza-flipper", pizza_cards);
            let pizza_card = createElem("div", "pizza-card", pizza_flipper);
            let img_wrapper = createElem("div", "img-wrapper", pizza_card);
            let img = createElem("img", "", img_wrapper);
            img.setAttribute("src", `${pizza.imgSrc}`);
            let content_wrapper = createElem("div", "content-wrapper", pizza_card);

            createElem("span", "", content_wrapper, "<strong>Название: </strong> ");
            createElem("div", "name", content_wrapper, `${pizza.name}`);
            createElem("br", "new-line", content_wrapper);
            createElem("span", "", content_wrapper, "<strong>Состав:</strong> ");
            createElem("div", "ingredients", content_wrapper, `${pizza.ingredients.join(", ")}`);
            createElem("button", "edit-ing", content_wrapper, "Изменить состав");
            createElem("span", "", content_wrapper, "<strong>Калории:</strong> ");
            createElem("div", "calories", content_wrapper, `${pizza.calories}`);
            createElem("br", "new-line", content_wrapper);
            createElem("span", "", content_wrapper, "<strong>Цена:</strong> ");
            createElem("div", "price", content_wrapper, `${pizza.price}`);
            createElem("span", "", content_wrapper, " грн");

        } else continue;
    }
};

function createList(arr) {
    //removing all items from container
    destroyWrapper();

    //clearing selectedName
    selectedName = "";

    //removing class to sylize as list
    pizza_container.classList.remove("pizza-container");
    createElem("hr", "", pizza_container);
    createElem("div", "", pizza_container, "<strong>Отсортировать по:</strong>");
    // sort select for ingredients
    let sortSelect = createElem("select", "sort-select", pizza_container);
    sortSelect.setAttribute("size", "2");
    let priceOption = createElem("option", "", sortSelect, "Цене");
    priceOption.setAttribute("value", "price");
    let nameOption = createElem("option", "", sortSelect, "Названию");
    nameOption.setAttribute("value", "name");

    // creating radio buttons for ascending or descending sorting
    ascRadio = createElem("input", "ascending", pizza_container);
    ascRadio.setAttribute("type", "radio");
    ascRadio.setAttribute("name", "sortRadio");
    ascRadio.setAttribute("value", "Name");

    descRadio = createElem("input", "descending", pizza_container);
    descRadio.setAttribute("type", "radio");
    descRadio.setAttribute("name", "sortRadio");
    descRadio.setAttribute("value", "Price");

    //creating labels for radio buttons
    let labelPrice = createElem("label", "", null, "По возрастанию");
    pizza_container.insertBefore(labelPrice, ascRadio);
    let labelName = createElem("label", "", null, "По убыванию");
    pizza_container.insertBefore(labelName, descRadio);

    //creating sort button
    createElem("button", "btn-sort", pizza_container, "Отсортировать");
    createElem("hr", "", pizza_container);

    //creating list of pizzas
    let pizza_list = createElem("ul", "", pizza_container);
    pizza_list.style = `
        list-style-image: url(images/marker.png);
        margin-left: 10px;    
    `;

    for (let pizza of arr) {
        createElem("li", "", pizza_list, `<strong>${pizza.name}</strong>, ${pizza.price} грн`);
    }
};

function findIngred(ingred) {
    let tmpIng = ingred.trim().split(", ");
    for (let x of tmpIng) {
        if (!allIngredients.hasOwnProperty(x)) 
            return false;
    }
    return true;
}

wrapper.addEventListener("click", (e) => {
    let target = e.target;
    if (target.id === "asGrid") {
        createGrid(staticArray, null);
    } else if (target.id === "asList") {
        createList(staticArray);
    } else if (target.className === "btn-sort") {
        selectedName.length !== 0 ? (
            mySort(pizzaMenu, selectedName),
            createList(pizzaMenu)
        ) : (
            alert("Выберите характеристику, по которой желаете сортировать(Цена/Название)")
        );
    } else if (target.className === "edit-ing") {
        modal.style.display = "block";
        textArea.value = target.previousElementSibling.innerText;
        currentConsist = target.parentNode.querySelector(".ingredients");
        currentCalories = target.parentNode.querySelector(".calories");
        currentPrice = target.parentNode.querySelector(".price");
        currentName = target.parentNode.querySelector(".name")
        ;
    } else if (target.className === "close") {
        modal.style.display = "none";
    } else if (target.className === "modal") {
        modal.style.display = "none";
    } else if (target.className === "edit-field" ||
        target.className === "modal-content") {
        // e.stopPropagation();
    } else {
        // TODO: CREATE CONDITION
        // checking if our target is not "pizza-flipper" -> up to the parentnode
        while (!target.classList.contains("pizza-flipper")) {
            target = target.parentNode;
        }

        if (!target.classList.contains("clicked")) {
            target.classList.add("clicked");
        } else {
            target.classList.remove("clicked");
        }
    }
});

wrapper.addEventListener("change", (e) => {
    let target = e.target;
    if (target.className === "filter-select" &&
        target.tagName === "SELECT") {
            createGrid(staticArray, target.value);
    } else if (target.className === "sort-select" &&
        target.tagName === "SELECT") {
            selectedName = target.options[target.selectedIndex].value;
    } else if (target.tagName === "TEXTAREA" &&
        target.className === "edit-field") {
            console.log(currentCalories.innerHTML," ",currentPrice.innerHTML);
            let tmpArr, targArr;
            //check if the ingredient exists 
            findIngred(target.value) === true ? (
                // clearing the array in order to push a new one
                tmpArr = staticArray[find(staticArray, currentName.innerHTML)].ingredients,
                tmpArr.length = 0,
                targArr = target.value.trim().split(", "),
                tmpArr.push(...targArr),
                currentConsist.innerHTML = target.value
            ) : (
                alert("Такого ингредиент нет в меню !!!")
            );   
    }
});