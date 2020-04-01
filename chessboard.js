
const chessboard = () => {
    const tabNb = [1, 2, 3, 4, 5, 6, 7, 8]
    const tabLetters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const resultatTab = []
// [[1][2][3][4][5]]
    //letter = tabLetters[i]
    for(let letter of tabLetters){
        resultatTab.push(tabNb.map(number => `${letter} - ${number}`))
    }

    return resultatTab
}


module.exports = chessboard




// const chessboard = () => {
//     const tabNb = [1, 2, 3, 4, 5, 6, 7, 8]
//     const tab = ["a", "b", "c", "d", "e", "f", "g", "h"]
//     const resultatTab = []
//     let i = 0


//     while (i < tab.length) {
//         let j = 0
//         const colonneTab = []
//         while (j < tabNb.length) {
//             //["a - 1", "a - 2", "a - 3", "a - 4", "a - 5", "a - 6", "a - 7", "a - 8"]
//             colonneTab.push(`${tab[i]} - ${tabNb[j]}`)
//             j++
//         }
//         resultatTab.push(colonneTab)
//         i++
//     }
//     return resultatTab
// }

