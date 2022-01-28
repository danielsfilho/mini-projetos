//limite de velocidade

maximumSpeed(50)

function maximumSpeed(speed) {
    const speedLimit = 70
    const kmToPoints = 5

    if(speed <= speedLimit) {

        console.log('Have a good trip!')
    }else {
        let points = ((speed - speedLimit) / kmToPoints)

        if(points >= 12) {
            console.log('License suspended!')
        }
        else {
            console.log(`You got ${Math.floor(points)} points on your driver's license.`)
        }
    }

}