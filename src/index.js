
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let finalArr = [];
  if(!matrix) return [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0){
      finalArr = finalArr.concat(matrix[i]);
    } else {
      finalArr = finalArr.concat(matrix[i].reverse());
    }
  }
  console.log(finalArr)
  return finalArr;
}
