const chessboard = () => {
    const tabNb = [1,2,3,4,5,6,7,8]
    const tab = ["a","b","c","d","e","f","g","h"]
    const resultatTab = []
    let i = 0
    let j = 0

    while(i < tab.length) {
        while(j < tabNb.length) {
        resultatTab.push(`${tab[i]} - ${tabNb[j]}`)
        j++
}
j=0
i++
}
console.log(resultatTab)
}




module.exports = chessboard








