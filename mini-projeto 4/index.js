//se o número é impar ou par
//percorre todos os números até o qual foi escolhido mostrando se cada um é impar ou par

displayType(30)


function displayType(limit){
    
    for(let i = 0; i <= limit ; i++) {
        if(i % 2 === 0) {
            console.log(i,'PAR')
        }else {
            console.log(i,'IMPAR')
        }
    }
    
}
