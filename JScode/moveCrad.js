let GRID_SIZE=5
let cardPosition = {x:0,y:0}
function moveCard(destination){
    let {x,y} = cardPosition
    switch(destination){
     case 'up':
         if(y>0) y--
         break
     case 'down':
         if(y<GRID_SIZE-1) y++
         break
     case 'left':
         if(x>0) x--
         break
      case 'right':
         if(x<GRID_SIZE-1) x++
         break
     default:
        console.log("Invalid move")
        return
    }
cardPosition = {x,y}
}

const moves = ["down","right"]
moves.forEach((move)=>{
    moveCard(move)
})

console.log([cardPosition.x,cardPosition.y])