
function research(){
    var x = document.getElementById('input').value;
  
    var word = x.toUpperCase();  // toUpperCase() deixa tudo maiusculo.
    console.log(word);
    //alert(word);

    if(word == "VAR" || word == "LET"){

        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '>int nome = valor; para numeros inteiros <\n> float nome = valor; para numeros nao inteiros <\n> char[quantidade] nome = caracteres; para caracteres <\n> string nome = string; para string';

    }else
    if(word == "DOCUMENT.WRITE" || word == "WRITE"){
        
        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '> cout::std << "seu texto"; < \n > cout::std << "seu text" << endl; para quebrar linha apos o texto <';
    
    }else
    if(word == "LOOP" || word == "WHILE" || word == "FOR"){
        document.querySelector('#output').innerHTML = "&nbsp;";
        document.querySelector('#output').innerText = '> while(condicao) < \n > for(int i; condicao; i++)';
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