let ingredientsArr = [],
    wrapper = document.querySelector("#main-wrapper"),
    pizza_container = document.querySelector(".pizza-container"),
    counter = document.querySelector(".counter"),
    sum = document.querySelector(".total-sum-number"),
    icon = document.querySelector(".basket-container"),
    dropdown = document.querySelector(".dropdown-content"),
    selectedName = "",
    ascRadio,
    descRadio,
    modal,
    modal_newPizza,
    textArea,
    currentName,
    currentConsist,
    currentPrice,
    currentCalories,
    newName,
    newIngredients = [],
    orderedPizza = [],
    staticArray = [],
    basketElements = [],
    newPicture,
    number = 0;

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
        if (array[i].name == value) {
            return i;
        }
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
            return prev.price - next.price;
        } else if (by === "name") {
            if (prev.name.toLowerCase().split(" ").join("") > next.name.toLowerCase().split(" ").join("")) {
                return 1;
            }
            if (prev.name.toLowerCase().split(" ").join("") < next.name.toLowerCase().split(" ").join("")) {
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

function calcData(condition, data, name) {
    let sum = 0;
    if (condition === "price") {
        data.map(x => {
            sum += allIngredients[x].price;
        });
        // creating a property price if doesn't exist
        if (name !== undefined) {
            let currentObj = pizzaMenu[`${find(pizzaMenu,name)}`];
            currentObj["price"] = sum;
        }
    } else if (condition === "calories") {
        data.map(x => {
            sum += allIngredients[x].calories;
        });
        // creating a property price if doesn't exist
        if (name !== undefined) {
            let currentObj = pizzaMenu[`${find(pizzaMenu,name)}`];
            currentObj["calories"] = sum;
        }
    }

    return sum;
}

// ------------------------------------------
// Creating Modal for adding a new pizza
modal_newPizza = createElem("div", "modal-new-pizza", wrapper);
let modal_content_new = createElem("div", "modal-content-new-pizza", modal_newPizza);
createElem("div", "modal-ingredients", modal_newPizza, "<strong>Состав:</strong>");
createElem("span", "close", modal_content_new, "&times");
let pizzaForm = createElem("form", "pizza-form", modal_content_new);
let newPizzaImage = createElem("div", "new-pizza-image", pizzaForm);
let image = createElem("img", "pizza-image", newPizzaImage);
let newPizzaName = createElem("div", "new-pizza-name", pizzaForm);
createElem("div", "modal-label", newPizzaName, "<strong>Название:</strong>");
newPizzaName.style = "margin-top: 20px;";
let modalInput = createElem("input", "modal-input", newPizzaName);
modalInput.type = "text";
let newPizzaIngredients = createElem("div", "new-pizza-ingredients", pizzaForm);
createElem("div", "modal-label", newPizzaIngredients, "<strong>Выберите ингридиенты:</strong>");
let select = createElem("select", "modal-select", newPizzaIngredients);
ingredientsArr.map(x => {
    createElem("option", "ingredient", select, x);
});
// Filereader API for inserting an image
let fileSelector = createElem("input", "choose-file", pizzaForm);
fileSelector.type = 'file';

let fileReader = new FileReader();

fileSelector.onchange = function handleFiles(event) {
    fileReader.readAsDataURL(event.target.files[0]);
    newPicture = `./images/${event.target.files[0].name}`;
    fileReader.onload = function (event) {
        image.src = event.target.result;
    }
}

createElem("button", "btn-create", pizzaForm, "Добавить");

// Creating Modal for editing
modal = createElem("div", "modal", wrapper);
let modal_content = createElem("div", "modal-content", modal);
createElem("span", "close", modal_content, "&times");
createElem("div", "modal-title", modal_content, "<strong>Состав:</strong>");
textArea = createElem("textarea", "edit-field", modal_content);
textArea.setAttribute("placeholder", "Edit here...");
textArea.setAttribute("cols", "30");
textArea.setAttribute("rows", "5");
// ------------------------------------------

function createGrid(arr, ingredientItem) {
    //removing all items from container
    destroyWrapper();
    // adding class to stylize as grid
    pizza_container.classList.add("pizza-container");
    // filter button for ingredients
    let filterWrapper = createElem("div", "filter-wrapper", pizza_container);
    createElem("div", "filter-title", filterWrapper, "<strong>Фильтровать по одному из ингридиентов:</strong>");
    let filterSelect = createElem("select", "filter-select", filterWrapper);
    filterSelect.setAttribute("size", ingredientsArr.length);
    ingredientsArr.map(x => {
        createElem("option", "", filterSelect, x);
    });

    // create a new pizza button
    // createElem("button", "btn-newPizza", wrapper, "Добавить новую пиццу");

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
            createElem("div", "calories", content_wrapper, `${calcData("calories", pizza.ingredients, pizza.name)}`);
            createElem("br", "new-line", content_wrapper);
            createElem("span", "", content_wrapper, "<strong>Цена:</strong> ");
            createElem("div", "price", content_wrapper, `${calcData("price", pizza.ingredients, pizza.name)}`);
            createElem("span", "", content_wrapper, " грн");
            createElem("button", "btn-buy", content_wrapper, "Купить");

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
    pizza_container.classList.add("pizza-container_2");
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
        createElem("li", "", pizza_list, `<strong>${pizza.name}</strong>, ${calcData("price", pizza.ingredients, pizza.name)} грн`);
    }
};

function findIngred(ingred) {
    let tmpIng = ingred.split(", ");
    tmpIng = tmpIng.map(x => x.trim());
    for (let x of tmpIng) {
        if (!allIngredients.hasOwnProperty(x))
            return false;
    }
    return true;
}

function findById(arr, id) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) return i;
    }
    return -1;
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
        currentName = target.parentNode.querySelector(".name");
    } else if (target.className === "close") {
        modal.style.display = "none";
        modal_newPizza.style.display = "none";
    } else if (target.className === "modal") {
        modal.style.display = "none";
    } else if (target.className === "btn-newPizza") {
        modal_newPizza.style.display = "flex";
    } else if (target.className === "btn-buy") {
        let name = target.parentNode.querySelector(".name").textContent;
        let ingredients = target.parentNode.querySelector(".ingredients").textContent;
        let calories = target.parentNode.querySelector(".calories").textContent;
        let price = target.parentNode.querySelector(".price").textContent;
        sum.innerHTML = `${Number(sum.innerHTML) + Number(price)}`;
        let pizza = {
            id: ++number,
            name,
            ingredients,
            calories,
            price
        }
        if (localStorage.getItem("orderedPizza")) {
            orderedPizza = JSON.parse(localStorage.getItem("orderedPizza"));
            orderedPizza.push(pizza);
            localStorage.setItem("orderedPizza", JSON.stringify(orderedPizza));
        } else {
            orderedPizza.push(pizza);
            localStorage.setItem("orderedPizza", JSON.stringify(orderedPizza));
        }
        // changing counter value on the basket
        counter.innerHTML = number;
        // create block of order in the basket
        let basketElem = createElem("div", `basket-element basket-element_${number}`, myDropdown);
        createElem("span", "basket-element-name", basketElem, name);
        createElem("span", "basket-element-price", basketElem, `${price} грн`);
        createElem("span", "remove-item", basketElem, "&times");
        basketElements.push(basketElem);
        alert(`Пицца ${name} добавлена в корзину !!!`);
    } else if (target.className === "btn-create") {
        e.preventDefault();
        // Creating a new pizza card and pushing to our arrays
        if (newName && newIngredients.length !== 0) {
            let pizzaCreated = {
                name: `"${newName.charAt(0).toUpperCase() + newName.substr(1)}"`,
                ingredients: newIngredients,
                imgSrc: newPicture || "./images/pizza1.png"
            };
            pizzaMenu.unshift(pizzaCreated);
            staticArray.unshift(pizzaCreated);
            modal_newPizza.style.display = "none";
            createGrid(staticArray, null);
            alert(`Создано !!!`);
            // reset 
            let modal_ingredients = document.querySelector(".modal-ingredients");
            modal_ingredients.innerHTML = "";
            let modal_input = document.querySelector(".modal-input");
            modal_input.value = "";
            let pizzaImg = document.querySelector(".new-pizza-image").querySelector("img");
            pizzaImg.src = "";
            newName = "";
        } else {
            alert("Заполните все поля !!!");
        }
    } else if (target.className === "remove-item") {
        // removing item from web page
        basketElements.splice(basketElements.indexOf(target.parentNode), 1);
        let itemToRemove = target.parentNode;
        itemToRemove.parentNode.removeChild(itemToRemove);
        // removing item from localstorage and updating sum of the order on the web page
        orderedPizza = JSON.parse(localStorage.getItem("orderedPizza"));
        let rmvFromStorage = findById(orderedPizza,Number(itemToRemove.className.split("_")[1]));
        sum.innerHTML = `${Number(sum.innerHTML) - Number(orderedPizza[`${rmvFromStorage}`].price)}`;
        orderedPizza.splice(`${rmvFromStorage}`,1);
        localStorage.setItem("orderedPizza",JSON.stringify(orderedPizza));
        // changing counter value on the basket
        counter.innerHTML = --number;
    } else if (target.classList.contains("icon") || target.classList.contains("basket-container")) {
        if (!dropdown.classList.contains("show")) {
            dropdown.classList.add("show")
        } else {
            dropdown.classList.remove("show")
        }
    } else if (target.className === "btn-order") {
        if (sum.innerHTML === "0") {
            alert("Корзина пуста!!!");
        } else {
            basketElements.map(elem => {
                target.parentNode.parentNode.removeChild(elem);
            });
            // reset
            basketElements = [];
            counter.innerHTML = "0";
            orderedPizza = [];
            number = 0;
            localStorage.removeItem("orderedPizza");
            alert(`Оформление заказа на сумму: ${sum.innerHTML}грн.\nЗдесь вы должны ввести свои данные и бла бла бла ...`);
            sum.innerHTML = "0";
        }
        dropdown.classList.remove("show");
    } else if (target.className === "btn-clear") {
        if (sum.innerHTML === "0") {
            alert("В козине ничего нет...");
        } else {
            basketElements.map(elem => {
                target.parentNode.parentNode.removeChild(elem);
            });
            // reset
            basketElements = [];
            counter.innerHTML = "0";
            sum.innerHTML = "0";
            orderedPizza = [];
            number = 0;
            localStorage.removeItem("orderedPizza");
            alert("Очищено!!!");
        }
    } else {
        // checking if our target is not "pizza-flipper" -> up to the parentnode
        while (!target.classList.contains("pizza-flipper")) {
            target = target.parentNode;
            //check if our target is not in pizza-card
            if (target.tagName === "BODY") {
                return false;
            }
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
        let tmpArr, targArr;
        target.value = target.value.trim();
        if (target.value.lastIndexOf(",") === target.value.length - 1) {
            target.value = target.value.slice(0, target.value.lastIndexOf(",")).trim();
        }
        // check if the ingredient exists 
        findIngred(target.value) ? (
            // clearing the array in order to push a new one
            tmpArr = staticArray[find(staticArray, currentName.innerHTML)].ingredients,
            tmpArr.length = 0,
            targArr = target.value.split(","),
            targArr = targArr.map(x => x.trim()),
            tmpArr.push(...targArr),
            currentConsist.innerHTML = targArr.join(", ")
        ) : (
            alert("Такого ингредиент нет в меню !!!")
        );
        currentPrice.innerHTML = calcData("price", currentConsist.innerHTML.split(", "));
        currentCalories.innerHTML = calcData("calories", currentConsist.innerHTML.split(", "));
    } else if (target.className === "modal-input") {
        newName = target.value
    } else if (target.className === "modal-select") {
        let modal_ingredients = document.querySelector(".modal-ingredients");
        createElem("div", "new_ingredient", modal_ingredients, target.options[target.selectedIndex].value);
        newIngredients.push(target.options[target.selectedIndex].value);
    }
});

window.addEventListener("load", (e) => {
    if (localStorage.getItem("orderedPizza")) {
        tmpOrderedPizza = JSON.parse(localStorage.getItem("orderedPizza"));
        number = tmpOrderedPizza.length;
        counter.innerHTML = number;
        tmpOrderedPizza.map(order => {
            let basketElem = createElem("div", `basket-element basket-element_${order.id}`, myDropdown);
            createElem("span", "basket-element-name", basketElem, order.name);
            createElem("span", "basket-element-price", basketElem, `${order.price} грн`);
            createElem("span", "remove-item", basketElem, "&times");
            sum.innerHTML = Number(sum.innerHTML) + Number(order.price);
            orderedPizza.push(order);
            basketElements.push(basketElem); 
        }); 
    }

    if (localStorage.getItem("pizzaMenu")) {
        let loadedPizzaMenu = JSON.parse(localStorage.getItem("pizzaMenu"));
        pizzaMenu = Array.from(loadedPizzaMenu);
    }

    staticArray = Array.from(pizzaMenu);
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("pizzaMenu", JSON.stringify(pizzaMenu));
});