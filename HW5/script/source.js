let pizzaMenu = [{
        name: "\"Фитнес\"",
        ingredients: ["Курица", "Сыр \"Чеддер\"", "Перец болгарский", "Помидор", "Укроп", "Томатный соус", "Сладкий соус чили"],
        imgSrc: "./images/pizza1.png"
    }, {
        name: "\"Баварская\"",
        ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Огурцы соленые", "Помидор", "Оливки", "Кетчуп", "Специи итальянские"],
        imgSrc: "./images/pizza2.png"
    }, {
        name: "\"Фирменная\"",
        ingredients: ["Курица", "Сыр \"Чеддер\"", "Ветчина", "Майонез", "Грибы", "Томатный соус", "Маслины"],
        imgSrc: "./images/pizza3.png"
    }, {
        name: "\"Салями\"",
        ingredients: ["Салями", "Сыр \"Чеддер\"", "Томатный соус", "Огурцы соленые", "Укроп", "Майонез"],
        imgSrc: "./images/pizza4.png"
    }, {
        name: "\"Курица с ананасом\"",
        ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Томатный соус", "Ананас", "Майонез", "Оливки"],
        imgSrc: "./images/pizza5.png"
    }, {
        name: "\"Курица с грибами\"",
        ingredients: ["Курица", "Сыр \"Чеддер\"", "Грибы", "Майонез", "Грибы", "Томатный соус"],
        imgSrc: "./images/pizza6.png"
    },
    {
        name: "\"С грибами\"",
        ingredients: ["Грибы", "Сыр \"Чеддер\"", "Томатный соус", "Майонез"],
        imgSrc: "./images/pizza7.png"
    }, {
        name: "\"С ветчиной\"",
        ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Майонез", "Томатный соус"],

        imgSrc: "./images/pizza8.png"
    }, {
        name: "\"Охотничья\"",
        ingredients: ["Охотничьи колбаски", "Сыр моцарелла", "Шампиньоны", "Сладкий лук", "Соус BBQ"],
        imgSrc: "./images/pizza9.png"
    },
    {
        name: "\"Маргарита\"",
        ingredients: ["Томаты", "Сыр моцарелла", "Базилик", "Соус Pomodoro", "Орегано"],
        imgSrc: "./images/pizza10.png"
    }, {
        name: "\"Кальцоне\"",
        ingredients: ["Ветчина", "Шампиньоны", "Сыр моцарелла", "Томаты", "Орегано"],
        imgSrc: "./images/pizza11.png"
    }, {
        name: "\"Берлускони\"",
        ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Базилик", "Перец болгарский", "Помидор", "Томатный соус", "Оливки"],
        imgSrc: "./images/pizza12.png"
    },
    {
        name: "\"Американо\"",
        ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Перец болгарский", "Базилик", "Майонез", "Томатный соус"],
        imgSrc: "./images/pizza13.png"
    }, {
        name: "\"Четыре сыра\"",
        ingredients: ["Колбаска сырокопченная", "Сыр \"Чеддер\"", "Огурцы соленые", "Помидор", "Оливки"],
        imgSrc: "./images/pizza14.png"
    }, {
        name: "\"Гурмео\"",
        ingredients: ["Курица", "Сыр \"Чеддер\"", "Ветчина", "Майонез", "Грибы", "Томатный соус", "Маслины"],
        imgSrc: "./images/pizza15.png"
    }, {
        name: "\"Полло\"",
        ingredients: ["Салями", "Сыр \"Чеддер\"", "Перец болгарский", "Помидор", "Укроп", "Томатный соус", "Сладкий соус чили"],
        imgSrc: "./images/pizza16.png"
    }, {
        name: "\"Карбонара\"",
        ingredients: ["Ветчина", "Сыр \"Чеддер\"", "Маслины", "Кетчуп", "Специи итальянские"],
        imgSrc: "./images/pizza17.png"
    }, {
        name: "\"Пепперони\"",
        ingredients: ["Салями", "Сыр моцарелла", "Огурцы соленые", "Соус Pomodoro"],
        imgSrc: "./images/pizza18.png"
    }
];

let allIngredients = {
    "Курица": {
        price: 25,
        calories: 400
    },
    "Сыр моцарелла": {
        price: 15,
        calories: 300
    },
    "Огурец соленый": {
        price: 5,
        calories: 100
    },
    "Соус Pomodoro": {
        price: 5,
        calories: 100
    },
    "Ветчина": {
        price: 25,
        calories: 450
    },
    "Сыр \"Чеддер\"": {
        price: 15,
        calories: 250
    },
    "Перец болгарский": {
        price: 5,
        calories: 120
    },
    "Помидор": {
        price: 5,
        calories: 150
    },
    "Укроп": {
        price: 5,
        calories: 50
    },
    "Томатный соус": {
        price: 5,
        calories: 100
    },
    "Сладкий соус чили": {
        price: 5,
        calories: 130
    },
    "Маслины": {
        price: 15,
        calories: 200
    },
    "Кетчуп": {
        price: 15,
        calories: 140
    },
    "Колбаска сырокопченная": {
        price: 30,
        calories: 400
    },
    "Оливки": {
        price: 10,
        calories: 170
    },
    "Базилик": {
        price: 5,
        calories: 110
    },
    "Укроп": {
        price: 5,
        calories: 100
    },
    "Майонез": {
        price: 5,
        calories: 200
    },
    "Шампиньоны": {
        price: 15,
        calories: 190
    },
    "Охотничьи колбаски": {
        price: 20,
        calories: 420
    },
    "Сладкий лук": {
        price: 5,
        calories: 130
    },
    "Соус Pomodoro": {
        price: 5,
        calories: 110
    },
    "Томаты": {
        price: 5,
        calories: 100
    },
    "Орегано": {
        price: 5,
        calories: 100
    },
    "Соус BBQ": {
        price: 5,
        calories: 120
    },
    "Ананас": {
        price: 5,
        calories: 130
    },
    "Специи итальянские": {
        price: 5,
        calories: 20
    },
    "Грибы": {
        price: 5,
        calories: 20
    },
    "Салями": {
        price: 25,
        calories: 60
    },
    "Огурцы соленые": {
        price: 10,
        calories: 20
    }
};