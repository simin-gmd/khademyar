export default function (queries) {
  let string = "";
  if (queries.length > 0) {
    queries.forEach((element) => {
      string += `&${element[0]}=${element[1]}`;
    });
  }
  return string;
}
