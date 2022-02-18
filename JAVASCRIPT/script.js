url = "https://economia.awesomeapi.com.br/json/USD-BRL"




function converter(){ 
    let input = document.getElementById("valor");
    let valor = input.value;
    console.log(valor);


fetch(url)
.then((res)=>{
    return res.json()
})

.then((data)=>{
    console.log(data[0].high) 
    let rate = data[0].high
    let resultado =`${valor} USD = ${Math.round (rate*valor*100)/100} Reais`
    document.getElementById("resultado").innerHTML=resultado;

    
})

}

// let res= (valor * rate).toFixed(2);

let dobro = function(){
    return 2*this.X;
}

let numero ={
    x:8,
    d:dobro
}

console.log(numero.d());