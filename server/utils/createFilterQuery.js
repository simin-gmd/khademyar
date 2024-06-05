export default function (queries) {
  let string = "";
  if (queries) {
    if (typeof queries == "object") {
      if (Object.entries(queries).length > 0) {
        Object.entries(queries).forEach((e) => {
          if (e[1]) {
            string += `&${e[0]}=${e[1]}`;
          }
          return;
        });
      }
    } else if (typeof queries == "string") {
      string = queries;
    } else {
      console.log("error type of filter is not valid");
    }
  }
  return string;
}
