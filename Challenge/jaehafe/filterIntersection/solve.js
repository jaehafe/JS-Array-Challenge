function solution(inputArray1, inputArray2) {
  let sol = inputArray1.filter((el) => inputArray2.includes(el));

  return sol;
}

exports.solution = solution;
