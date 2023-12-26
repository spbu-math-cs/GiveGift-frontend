import dayjs from "dayjs";

export const getNoun = (number, one, two, five) => {
  let n = Math.abs(number) % 100;
  if (n >= 5 && n <= 20) return five;

  n %= 10;

  if (n === 1) return one;
  if (n >= 2 && n <= 4) return two;
  return five;
};

export const calculateAge = (birthday) => {
  const now = dayjs();
  return now.diff(birthday, "year");
};

export const get_prettified_age = (birthday) => {
  const age = calculateAge(birthday);
  return `${age} ${getNoun(age, "год", "года", "лет")}`;
};

const ruMonths = {
  0: "января",
  1: "февраля",
  2: "марта",
  3: "апреля",
  4: "мая",
  5: "июня",
  6: "июля",
  7: "августа",
  8: "сентября",
  9: "октября",
  10: "ноября",
  11: "декабря",
};

export const get_prettified_birthday = (birthday) => {
  birthday = dayjs(birthday);
  const day = birthday.date(),
    month = birthday.month(),
    year = birthday.year();
  return `${day} ${ruMonths[month]}, ${year} года`;
};
