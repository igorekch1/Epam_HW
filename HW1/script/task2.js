var roles =
    [ "Городничий", "Аммос Федорович",
    "Артемий Филиппович","Лука Лукич"],
    textLines = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие к нам едет ревизор. Аммос Федорович: Как ревизор? Артемий Филиппович: Как ревизор? Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем. Аммос Федорович: Вот те на! Артемий Филиппович: Вот не было заботы, так подай! Лука Лукич: Господи боже! еще и с секретным предписаньем!`;

for (var x in roles) {

    var roleName = document.body.appendChild(document.createElement("span"))
    roleName.style = "font-weight: 700"
    roleName.innerHTML = `${roles[x]}:`

    var count = textLines.split(`${roles[x]}`).length - 1
    var space = repeat = nextRepeatEnd = next = 0
    
	for (var i = 0 ; i < count; i++) {
        console.log(repeat, next)

        var role = textLines.indexOf(`${roles[x]}`,repeat)
        var step = role + roles[x].length 
        var start =  textLines.indexOf(" ", step)
        var end = textLines.indexOf(roles[ Number(x) + 1], next)
        var phrase = textLines.slice(start, end).trim() 
        repeat = textLines.indexOf(`${roles[x]}`) + roles[x].length
        next = textLines.indexOf(`${roles[ Number(x) + 1]}`) + 1

        var text = document.body.appendChild(document.createElement("div"))
        text.innerHTML = `${phrase}`        

        console.log(start, end, role, repeat, phrase)
    }
}