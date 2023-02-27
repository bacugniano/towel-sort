
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [],
      newMatrix = [];

  if (!matrix) {
    return newArr;
  } else {
    newMatrix = matrix.map((elem, index) => {
      if (index % 2 !== 0) {
        return elem.reverse()
      } else return elem;
    })

    newMatrix.forEach((elem) => {
      elem.forEach(el => {
        newArr.push(el)
      })
    })
  }

  return newArr
}
