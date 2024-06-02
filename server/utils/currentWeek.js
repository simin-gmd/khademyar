export default function () {
  const date = new Date();
  let datesCollection = [];

  for (var i = 0; i < 7; i++) {
    datesCollection.push({
      id: i,
      Weeklabel: `${new Intl.DateTimeFormat("fa-IR", {
        weekday: "long",
      }).format(
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
      )}`,
      DayLabel: `${new Intl.DateTimeFormat("fa-IR", {
        day: "2-digit",
      }).format(
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
      )}`,
      date: {
        day: date.getDate() + i,
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      },
    });
  }

  return datesCollection;
}
