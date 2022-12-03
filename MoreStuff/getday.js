function getDayOfWeek(date) {
let daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

return daysOfWeek[date.getDay()];
}

let date = new Date('January 3, 1991');
console.log(getDayOfWeek(date));
