
function research(){
    var x = document.getElementById('input').value;
  
    var word = x.toUpperCase();  // toUpperCase() deixa tudo maiusculo.
    alert(word);

    if(word == "VAR"){

        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '>int nome = valor; para numeros inteiros <\n> float nome = valor; para numeros nao inteiros <\n> char[quantidade] nome = caracteres; para caracteres <\n> string nome = string; para string';

    }else
    if(word == "LET"){

        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '>int nome = valor; para numeros inteiros <\n> float nome = valor; para numeros nao inteiros <\n> char[quantidade] nome = caracteres; para caracteres <\n> string nome = string; para string';

    }else
    if(word == "DOCUMENT.WRITE"){
        
        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '> cout::std << "seu texto"; < \n > cout::std << "seu text" << endl; para quebrar linha apos o texto <';
    
    }else
    if(word == "WRITE"){
        
        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '> cout::std << "seu texto"; < \n > cout::std << "seu text" << endl; para quebrar linha apos o texto <';
    
    }
    else{
        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = 'Sem resposta';
    }
    

    
   

}


/*

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


}*/