function solution(inputArray) {
  let sol = inputArray
    .map((el) => el * el)
    .filter((el) => el % 3 === 1)
    .reduce((acc, cur) => acc + cur, 0);
  return sol;
}

exports.solution = solution;
