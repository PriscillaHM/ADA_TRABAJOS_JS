//VAR:
function ejemploVar() {
    //console.log(variableVar) //undefined por hoisting
    var variableVar = 'Soy una variable var'
    console.log(variableVar)
}
ejemploVar()

//LET:
function ejemploLet() {
    //console.log(variableLet) //undefined por hoisting
    let variableLet = 'Soy una variable let'
    console.log(variableLet)
}
ejemploLet()

//CONST:
function ejemploConst() {
    const variableConst = 'Soy una variable const'
    console.log(variableConst)

    //variableConst = "Otro valor" //No es posible reasignar
}
ejemploConst()