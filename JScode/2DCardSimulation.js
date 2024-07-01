let GRID_SiZE = 5
let cardPosition = {x:0,y:0}
const move_card = (direction)=>{
    let {x,y} = cardPosition
    switch(direction){
        case 'up':
            if(y>0) y--
            break;
        case 'down':
            if(y<GRID_SiZE-1) y++
            break;
        case 'left':
            if(x>0) x--
            break;
        case 'right':
            if(x<GRID_SiZE-1) x++
            break;
        default:
            console.log("Invalid move entered only up, down, left, right allowed ")
            return
    }
    cardPosition = {x,y}
        
}

const movements=['down','right']
movements.forEach(move=>{
    move_card(move)
    console.log(`card moved ${move} to position (${cardPosition.x},${cardPosition.y})`)
})

console.log(`final position of card (${cardPosition.x},${cardPosition.y})`)