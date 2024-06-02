export default function (param = new Date()) {
  return new Intl.DateTimeFormat("fa-IR", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  }).format(param);
}
