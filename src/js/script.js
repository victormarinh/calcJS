// Elemento input
let display = document.querySelector('#display');


// Inserir valores no input
function press(value){
    display.value = display.value.concat(value);
}

// Realizar calculo
function equal(){
    let valuesConcat = display.value;
    // Condição para valor vazio
    if(valuesConcat == ""){
        alert('Digite algum número!');
    }else{
        display.value = eval(valuesConcat);
    }
}

// Deletar valores do Input
function del(){
    let valuesConcat = display.value;
    display.value = valuesConcat.substring(0, valuesConcat.length-1);
}

// limpar ultimo valor do input
function clean(){
    display.value = "";
}
