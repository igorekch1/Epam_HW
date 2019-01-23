var roles =
    [ "Городничий", "Аммос Федорович",
    "Артемий Филиппович","Лука Лукич", "Ihor Cherniaiev"],
    startPoints = [],
    endPoints = [],
    rolesInPlay = [],
    roleText = [],
    textLines = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор. Аммос Федорович: Как ревизор? Артемий Филиппович: Как ревизор? Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем. Аммос Федорович: Вот те на! Артемий Филиппович: Вот не было заботы, так подай! Лука Лукич: Господи боже! еще и с секретным предписаньем! Ihor Cherniaiev: Welldone!`;

 //making arrays of start and end points of each role in textLines
for (let x in roles) {
    //Counting how many times each role is occured in textLines  
    let countRoles = textLines.split(`${roles[x]}`).length-1,
    step = 0;

    
    for (let i = 0; i < countRoles; i ++) {
        let startRole, endRole;
        startRole = textLines.indexOf(`${roles[x]}`, step)
        endRole = startRole + roles[x].length + 1
        step = startRole + roles[x].length
        
        startPoints.push(startRole)
        endPoints.push(endRole)
    }
}

//Right order as we can find them in textLines
startPoints.sort(); endPoints.sort()

//making an array of roles in right order as we can find them in textLines
for (let x in startPoints) {
    rolesInPlay.push(textLines.slice(startPoints[x], endPoints[x]))
}

///making an array of lines in right order as we can find them in textLines
for (let x in endPoints) {
    let startLine, endLine, line;
    startLine = endPoints[Number(x)] + 1
    endLine = endPoints[Number(x) + 1] ? startPoints[Number(x) + 1] : textLines.length
    line = textLines.slice(startLine, endLine).trim(); 
    roleText.push(line)
}

//Making object which stores role(property) and array of lines he has(value) 
var play = {}
for (let x in rolesInPlay) {
    //checking if the object contains such property
    if (play.hasOwnProperty(`${rolesInPlay[x]}`)) {
        play[`${rolesInPlay[x]}`].push(`${Number(x)+1}) ` + roleText[x])
    } else {
        Object.assign(play, { [rolesInPlay[x]] : [`${Number(x)+1}) ` + roleText[x]] })
    }
    console.log(x)
}

//Display object
for (let i in play) {
    let role;
    role = document.body.appendChild(document.createElement("div"))
    role.style = `font-weight : 700`
    role.innerHTML= `${i}`
    //The array output for each property
    play[i].map( text => {  document.body.appendChild(document.createElement("div")).innerHTML = `${text}` })
}
