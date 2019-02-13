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
    },
    {
        name: "\"Салями\"",
        ingredients: ["Салями", "Сыр \"Чеддер\"", "Томатный соус с чесноком", "Огурцы соленые", "Укроп", "Майонез"],
        calories: "1450",
        price: "54.00",
        imgSrc: "./images/pizza4.png"
    }, {
        name: "\"Курица с ананасом\"",
        ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Томатный соус", "Ананас", "МайонезОливки"],
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
        ingredients: ["Охотничьи колбаски", "Сыр моцарелла", "Шампиньоны", "сладкий лук", "соус BBQ"],
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
    },
    {
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
], ingredientsArr = [],
   wrapper = document.querySelector("#main-wrapper"),
   pizza_container = document.querySelector(".pizza-container"),
   selectedName = "",
   ascRadio,
   descRadio;

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

function destroyWrapper(){
    while(pizza_container.firstChild) {
        pizza_container.removeChild(pizza_container.firstChild)
    }    
};

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

function createGrid(arr,ingredientItem) {
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
    let pizza_cards = createElem("div", "pizza-cards", pizza_container);
    for (let pizza of arr) {    
        //check if pizza contains such an ingredient, true --> display
        if (arguments.length === 1 || pizza.ingredients.includes(ingredientItem)) {
            let pizza_card = createElem("div", "pizza-card", pizza_cards);
            let img_wrapper = createElem("div", "img-wrapper", pizza_card);
            let img = createElem("img", "", img_wrapper);
            img.setAttribute("src", `${pizza.imgSrc}`);
            let content_wrapper = createElem("div", "content-wrapper", pizza_card);

            createElem("div", "name", content_wrapper, `${pizza.name}`);
            createElem("div", "ingredients", content_wrapper, `${pizza.ingredients}`);
            createElem("div", "calories", content_wrapper, `${pizza.calories} калорий`);
            createElem("div", "price", content_wrapper, `${pizza.price} грн`);
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
    createElem("button","btn-sort", pizza_container, "Отсортировать");
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

    return "hellow?";
};

wrapper.addEventListener("click", (e) => {
    let target = e.target;
    if (target.id === "asGrid") {
        createGrid(staticArray);
    } else if (target.id === "asList") {
        createList(staticArray);
    } else if (target.className === "btn-sort") {
        selectedName.length !== 0 ? (
            mySort(pizzaMenu, selectedName),
            createList(pizzaMenu)
        ) : (
            alert("Выберите характеристику, по которой желаете сортировать(Цена/Название)")
        );
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
            }
})