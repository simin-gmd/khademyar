export default function (numbers = []) {
  let sum = 0;

  numbers.length > 0 &&
    numbers.forEach((item) => {
      sum = item + sum;
    });
  const average = sum / numbers.length;
  return average;
}
