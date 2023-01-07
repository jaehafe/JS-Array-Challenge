// write your codes
function solution(inputArray) {
  let sol = inputArray.filter((el) => 30 <= el.age && el.age < 50);
  return sol;
}

exports.solution = solution;
