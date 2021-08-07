
function research(){
    var palavra = document.querySelector("#input");
    var textinho = palavra.Value;

    alert(textinho);
    console.log(textinho);
    if(textinho == "var" || "let"){
        Var();

    }else
    if(textinho == "document.write" || "write"){
        Write();
    }else{
        document.querySelector('#output').innerText = 'Sem resposta';
    }
    

}




function Var(){

    var inpu;
    //var outp;

    var inpu = document.getElementById('input').Value;

    document.querySelector('#output').innerText = '>int nome = valor; para numeros inteiros <\n> float nome = valor; para numeros nao inteiros <\n> char[quantidade] nome = caracteres; para caracteres <\n> string nome = string; para string';


}

function Write(){
    var inpu;
    //var outp;

    var inpu = document.getElementById('input').Value;

    document.querySelector('#output').innerText = '> cout::std << "seu texto"; < \n > cout::std << "seu text" << endl; para quebrar linha apos o texto <';

}