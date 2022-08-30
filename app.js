const boxes = document.querySelectorAll('.box')
const bPosition = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const pScore = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const cScore = [0, 0, 0, 0, 0, 0, 0, 0, 0]

boxes.forEach(slot => slot.addEventListener('click', (e) => {
    let choice = e.target.id
    if (bPosition[choice] == 1) {
        return alert('This slot has been used. Please choose an available one.')
    } else {
        bPosition[choice] = 1
        pScore[choice] = 1
        let isFull = (bPosition.reduce((a, b) => a + b))
        e.target.textContent = 'X'
        if (isFull == 9) {
            alert('Game ends with tie result. Please play again.')
            location.reload()
        } 
    }
    if (checkScore(pScore) == true) {
        alert('You Win')
        location.reload()
    } 
    comPlay()
    if (checkScore(cScore) == true) {
        alert('You Lose')
        location.reload
    }
}))

function comPlay() {
    let cChoice = Math.floor(Math.random()*9)
    if (bPosition[cChoice] == 1) {
        return comPlay()
    } else {
        bPosition[cChoice] = 1
        cScore[cChoice] = 1
        boxes.forEach(findID => {
        if(findID.id == cChoice) { findID.textContent = 'O'}})}}

function checkScore(arr) {
    let c1 = arr[0] + arr[3] + arr[6]
    let c2 = arr[1] + arr[4] + arr[7]
    let c3 = arr[2] + arr[5] + arr[8]
    let r1 = arr[0] + arr[1] + arr[2]
    let r2 = arr[3] + arr[4] + arr[5]
    let r3 = arr[6] + arr[7] + arr[8]
    let d1 = arr[0] + arr[4] + arr[8]
    let d2 = arr[2] + arr[4] + arr[6]
    return Math.max(c1, c2, c3, r1, r2, r3, d1, d2) === 3 ? true : false
}

document.getElementById('newGame').addEventListener('click', () => location.reload())