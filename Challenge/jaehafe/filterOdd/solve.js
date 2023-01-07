// write your codes
function solution(inputArray) {
  let sol = inputArray.filter((el) => el % 2 === 1);
  return sol;
}

exports.solution = solution;
