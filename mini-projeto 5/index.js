//mostra somente os objetos que forem string 

const movie = {

    title: 'Avengers',
    age: 2018,
    director: 'Robin',
    character: 'Thor'
}

displayProperties(movie) 
function displayProperties(movieStats) {

    for(prop in movieStats){
        if(typeof movieStats[prop] === 'string') {
            console.log(prop, movieStats[prop])
        }
    }
}