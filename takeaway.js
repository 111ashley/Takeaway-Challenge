const canWin = n => {
    if (n < 2) {
        return false
    }

    let possibleMoves = [2,3,5]

    possibleMoves.forEach(move => {
        if (!canWin(n - move)) {
            return true
        }
    })

    return false
}


console.log(canWin(1))
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

console.log(canWin(5))
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true