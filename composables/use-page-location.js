export default function (accecibilities = "master") {
  let pages = [];
  if (accecibilities == "master") {
    pages = [
      {
        title: "صفحه اصلی",
        link: "/master",
        icon: "mdi-home-outline",
        activeRute: false,
        child: [],
      },
      {
        title: "سامانه خادمین چایخانه",
        link: "/master/dashboard/keramat/addShift",
        icon: "mdi-school-outline",
        activeRute: "keramat",
        child: [
          {
            title: "تعریف شیفت",
            link: "/master/dashboard/keramat/addShift",
            icon: "mdi-update",
            activeRute: "addShift",
          },
          {
            title: "شیفت های موجود",
            link: "/master/dashboard/keramat/listShifts",
            icon: "mdi-update",
            activeRute: "listShift",
          },
          {
            title: "شیفت های گذشته",
            link: "/master/dashboard/keramat/oldShifts",
            icon: "mdi-update",
            activeRute: "oldShifts",
          },
        ],
      },
      {
        title: "منابع انسانی",
        link: "/master/dashboard/human-resource/khademyar",
        icon: "mdi-account-group-outline",
        activeRute: "human-resource",
        child: [
          {
            title: "خادمیاران",
            link: "/master/dashboard/human-resource/khademyar",
            icon: "mdi-account-group-outline",
            activeRute: "khademyar",
          },
          {
            title: "افزودن خادمیار",
            link: "/master/dashboard/human-resource/addKhademyar",
            icon: "mdi-account-group-outline",
            activeRute: "addKhademyar",
          },
        ],
      },
      // {
      //   title: "جشنواره خدمت",
      //   link: "/master/dashboard/poll/polls",
      //   icon: "mdi-party-popper",
      //   activeRute: "poll",
      //   child: [],
      // },
      // {
      //   title: "سامانه جامع خادم رضوی",
      //   link: "/master/dashboard/poll/pollGroups",
      //   icon: "mdi-account-box-multiple-outline",
      //   activeRute: false,
      //   child: [],
      // },

      // {
      //   title: "پروفایل",
      //   link: "/master/dashboard/profile/masterProfile",
      //   icon: "mdi-message-alert-outline",
      //   activeRute: "profile",
      //   child: [
      //     {
      //       title: "پروفایل",
      //       link: "/master/dashboard/profile/masterProfile",
      //       icon: "mdi-message-alert-outline",
      //       activeRute: "profile",
      //     },
      //   ],
      // },
      {
        title: " پروفایل ",
        link: "/master/dashboard/profile/masterProfile",
        icon: "mdi-message-alert-outline",
        activeRute: "profile",
        child: [
          {
            title: "اطلاعات پایه",
            link: "/master/dashboard/profile/info",
            icon: "mdi-message-alert-outline",
            activeRute: "info",
          },
          {
            title: "پروفایل",
            link: "/master/dashboard/profile/masterProfile",
            icon: "mdi-message-alert-outline",
            activeRute: "userProfile",
          },
          {
            title: "تغییر رمز",
            link: "/master/dashboard/profile/changePassword",
            icon: "mdi-message-alert-outline",
            activeRute: "changePassword",
          },
        ],
      },
    ];
  } else if (accecibilities == "user") {
    pages = [
      {
        title: "صفحه اصلی",
        link: "/user",
        icon: "mdi-home-outline",
        activeRute: false,
        child: [],
      },

      {
        title: "سامانه خادمین چایخانه",
        link: "/user/dashboard/keramat/shifts",
        icon: "mdi-school-outline",
        activeRute: "keramat",
        child: [
          {
            title: "کارنامه خدمت",
            link: "/user/dashboard/keramat/shifts",
            icon: "mdi-playlist-plus",
            activeRute: "shifts",
          },
          {
            title: "شیفت های موجود",
            link: "/user/dashboard/keramat/lists",
            icon: "mdi-timeline-clock-outline",
            activeRute: "lists",
          },
          {
            title: "تقویم شیفت ها ",
            link: "/user/dashboard/keramat/listEvent",
            icon: "mdi-calendar-star",
            activeRute: "listEvent",
          },
        ],
      },
      // {
      //   title: "جشنواره خدمت",
      //   link: "/user/dashboard/poll/polls",
      //   icon: "mdi-party-popper",
      //   activeRute: "poll",
      //   child: [],
      // },
      // {
      //   title: "سامانه جامع خادم رضوی",
      //   link: "/user/dashboard/poll/pollGroups",
      //   icon: "mdi-account-box-multiple-outline",
      //   activeRute: false,
      //   child: [],
      // },

      {
        title: " پروفایل ",
        link: "/user/dashboard/profile/userProfile",
        icon: "mdi-message-alert-outline",
        activeRute: "profile",
        child: [
          {
            title: "اطلاعات پایه",
            link: "/user/dashboard/profile/info",
            icon: "mdi-message-alert-outline",
            activeRute: "info",
          },
          {
            title: "پروفایل",
            link: "/user/dashboard/profile/userProfile",
            icon: "mdi-message-alert-outline",
            activeRute: "userProfile",
          },
          {
            title: "تغییر رمز",
            link: "/user/dashboard/profile/changePassword",
            icon: "mdi-message-alert-outline",
            activeRute: "changePassword",
          },
        ],
      },
    ];
  }
  return useState("page location list", () => pages);
}
