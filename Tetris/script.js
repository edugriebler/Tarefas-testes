const gridWidht = 10

// Shapes
const lShape = [
    [1,2,gridWidht + 1, gridWidht*2 + 1],
    [gridWidht, gridWidht+1, gridWidht + 2, gridWidht*2 + 2],
    [1, gridWidht + 1, gridWidht*2, gridWidht*2 + 1],
    [gridWidht, gridWidht*2, gridWidht*2 + 1, gridWidht*2 + 2]
] 

const zShape = [
    [gridWidht + 1, gridWidht + 2, gridWidht*2, gridWidht*2 + 1],
    [0, gridWidht, gridWidht + 1, gridWidht*2 + 1],
    [gridWidht +1, gridWidht + 2, gridWidht*2, gridWidht*2 + 1],
    [0, gridWidht, gridWidht + 1, gridWidht*2 + 1]
]

const tShape = [
    [1, gridWidht, gridWidht + 1, gridWidht + 2],
    [1, gridWidht + 1, gridWidht + 2, gridWidht*2 + 1],
    [gridWidht, gridWidht + 1, gridWidht + 2, gridWidht*2 +1],
    [1, gridWidht, gridWidht + 1, gridWidht*2 + 1]
]

const oShape = [
    [0, 1, gridWidht, gridWidht +1],
    [0, 1, gridWidht, gridWidht +1],
    [0, 1, gridWidht, gridWidht +1],
    [0, 1, gridWidht, gridWidht +1]
]

const iShape = [
    [1, gridWidht+1, gridWidht*2 + 1, gridWidht*3 + 1],
    [gridWidht, gridWidht + 1, gridWidht + 2, gridWidht+3],
    [1, gridWidht + 1, gridWidht*2 + 1, gridWidht*3 + 1],
    [gridWidht, gridWidht + 1, gridWidht + 2, gridWidht+3]
]

const allShapes = [lShape, zShape, tShape, oShape, iShape]

let currentPosition = 3
let currentRotation = 0
let randomShape = Math.floor(Math.random () * allShapes.length)
let currentShape = allShapes[randomShape][currentRotation]
let $gridSquares = document.querySelectorAll(".grid div")

function draw() {
    currentShape.forEach(squareIndex => {
        $gridSquares[squareIndex + currentPosition].classList.add("shapePainted")
    })
}
draw()

function undraw() {
    currentShape.forEach(squareIndex => {
        $gridSquares[squareIndex + currentPosition].classList.remove("shapePainted")
    })
}

setInterval(moveDown, 700)

function moveDown() {
    freeze()

    undraw()
    currentPosition += 10
    draw()
}

function freeze() {
    if (currentShape.some(squareIndex =>
        $gridSquares[squareIndex + currentPosition + gridWidht].classList.contains ("filled")
        )){
            currentShape.forEach(squareIndex => $gridSquares [squareIndex + currentPosition].classList.add("filled"))

            currentPosition = 3
            currentRotation = 0
            randomShape = Math.floor(Math.random () * allShapes.length)
            currentShape = allShapes[randomShape][currentRotation]
        }
}

function moveLeft() {
    cont isEdgelimit = currentShape.some(squareIndex => (squareIndex + currentPosition) % gridWidht == 0)

    undraw()
    currentPosition--
    draw
}

function moveRight() {
    undraw()
    currentPosition++
    draw()
}

document.addEventListener("keydown", controlKeyboard)

function controlKeyboard(event) {
    if (event.key == "ArrowLeft"){
        moveLeft()
    }
    else if (event.key == "ArrowRight") {
        moveRight()
    } 
}