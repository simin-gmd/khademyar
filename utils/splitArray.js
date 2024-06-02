export default function (array, parts) {
  const result = [];
  const length = array.length;
  const chunkSize = Math.ceil(length / parts);
  for (let i = 0; i < length; i += chunkSize) {
    const part = array.slice(i, i + chunkSize);
    result.push(part);
  }
  return result;
}
