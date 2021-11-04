
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]
// function superbowlWin(record) {
//     if (record.result === "W") {
//         return record.year;
//     }
// }

// let superbowlWin = record.find(record => record.year === "W")
// console.log(superbowlWin)

function superbowlWin(record) {
    const win = record.find(record => record.result === "W"); //
    if (win){
        return win.year
    } else {
        return 
    }  
}   superbowlWin();