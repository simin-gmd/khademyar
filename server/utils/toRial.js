export default function (number) {
  return new Intl.NumberFormat("fa-IR").format(number) + "  ریال";
}
