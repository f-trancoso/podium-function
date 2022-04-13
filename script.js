console.log('Defina as colocações utilizando a função "podium(firstPlace, secondPlace, thirdPlace)"')

function podium(firstPlace, secondPlace, thirdPlace){
    let positions = [firstPlace, secondPlace, thirdPlace]
    if (thirdPlace === 'Daniel'){
        positions = [firstPlace, thirdPlace, secondPlace]
    } else if (secondPlace === 'Daniel'){
        positions = [secondPlace, firstPlace, thirdPlace]
    }
    console.log('1º - Colocado "'+positions[0]+'"')
    console.log('2º - Colocado "'+positions[1]+'"')
    console.log('3º - Colocado "'+positions[2]+'"')
}

