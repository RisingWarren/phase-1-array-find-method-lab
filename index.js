// code your solution here

function superbowlWin(record){
   
const recWin = record.find(object => object.result === "W")

if (recWin === undefined){
    return undefined} else{
    return recWin.year}



}




























// const recordedWin = record.find(object => object.result === "W");

    

// console.log(recordedWin) 

// if(recordedWin === undefined){
//     return undefined
// } else {
//     return recordedWin.year
// } 