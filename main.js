function getFactors(number) {
  return Array.from(Array(number + 1), (_, i) => i).filter(
    (i) => number % i === 0
  );
}

function isPerfectNumber(num) {
  const factors = new Set([1]);
  for (let i = 2; i < Math.sqrt(num - 1); i++) {
    if (num % i === 0) {
      factors.add(i).add(num / i);
    }
  }
  return Array.from(factors).reduce((prev, curr) => prev + curr) === num;
}

function add(accumulator, a) {
  return accumulator + a;
}

function main() {
  const result = [];
  let currentNumber = 2;

  // we need to loop until we found all 5 answers
  while (result.length < 5) {
    if (isPerfectNumber(currentNumber)) {
      result.push(currentNumber);
    }

    console.log({
      currentNumber,
      result,
    });

    currentNumber += 1;
  }

  console.log({
    result,
  });
  return result;
}

main();
