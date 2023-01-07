function solution(inputArray) {
  const isEven = (currentValue) => currentValue % 2 === 0;
  return inputArray.every(isEven);
}

exports.solution = solution;
