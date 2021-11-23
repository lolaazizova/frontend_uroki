let c = prompt("Введите первое число");
let znak = prompt ("Введите операцию(*,/,+,-,%)");
let d = prompt("Введите второе число");

let result ;
if (znak == "+"){
    result = parseInt(c) + parseInt(d);
    console.log(result);
}else if (znak == "-"){
    result = parseInt(c) - parseInt(d); 
    console.log(result); 
}else if (znak == "*"){
    result = parseInt(c) * parseInt(d); 
    console.log(result); 
}else if (znak == "/"){
    result = parseInt(c) / parseInt(d); 
    console.log(result); 
}else if (znak == "%"){
    result = parseInt(c) - parseInt(d); 
    console.log(result); 
}else{
    alert("Не верный ввод");
}
let login = prompt("Введите логин");
let parol = prompt("Введите пароль");
if(login == "lola95" & parol == "12345"){
    console.log("Welcome");
}else if (login != "lola95") {
    console.log("Неверный логин");
    
}else if( parol != "12345" ){
    console.log("Неверный пароль");
}else{
    console.log("Попробуй еще раз");
}
