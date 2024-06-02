export default function (period = "week", month = new Date().getMonth()) {
  //  get date date

  const p2e = (s) => s.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  const weekOrders = [
    { title: "شنبه", order: 0 },
    { title: "یکشنبه", order: 1 },
    { title: "دوشنبه", order: 2 },
    { title: "سه‌شنبه", order: 3 },
    { title: "چهارشنبه", order: 4 },
    { title: "پنجشنبه", order: 5 },
    { title: "جمعه", order: 6 },
  ];
  const date = month
    ? new Date(new Date().getFullYear(), month, 1)
    : new Date();
  // const day =
  const persianDate = new Intl.DateTimeFormat("fa-IR", {
    day: "2-digit",
  }).format(new Date(date.getFullYear(), date.getMonth(), date.getDate()));

  // if period is week
  if (period == "month") {
    // get current year
    // set jalali first day of month
    const FirstDayOfTheMonth = toJalali(
      new Date(date.setDate(date.getDate() - Number(p2e(persianDate))))
    );

    //   length of current month
    let CurrentMonthCount = 0 - FirstDayOfTheMonth;
    // set a counter for array map and set up id for each date object
    let i = 0;
    //  make an empty array that will store all  dates in
    const DaysItems = new Array(35).fill(null).map(() => {
      // fill array with dates
      i++;
      CurrentMonthCount++;
      return {
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
          day: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + i
          ).getDate(),
          month: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + i
          ).getMonth(),
          year: new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + i
          ).getFullYear(),
        },
      };
    });

    const pos = weekOrders.find(
      (item) => item.title == DaysItems[0].Weeklabel
    ).order;

    for (let n = 0; n < pos; n++) {
      DaysItems.unshift({
        Weeklabel: `-`,
        DayLabel: `-`,
        date: {
          day: "-",
          month: "-",
          year: "-",
        },
      });
    }

    const daysMatrix = new Array(5).fill([]).map(() => {
      return DaysItems.splice(0, 7);
    });

    return daysMatrix;
  } else {
    // if period is not month then it must return weekly dates
    let datesCollection = [];
    // set a for loop forr  next 7days
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
}
