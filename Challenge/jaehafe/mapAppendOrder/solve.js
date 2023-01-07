// write your codes
function solution(inputArray) {
  const answer = [];
  let i = 1;
  while (i < inputArray.length - 1) {
    inputArray.map((el) => answer.push({ name: `${el}`, order: i++ }));
    return answer;
  }
}

exports.solution = solution;
