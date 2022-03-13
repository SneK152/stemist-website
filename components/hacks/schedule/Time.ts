let months = [
  " ",
  "Janurary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function useTime(date: Date) {
  let dotw = date.getDay();
  let dateString = date.toDateString();
  let timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  let moty = date.getMonth();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let day = days[dotw];
  let month = months[moty];

  let possible = `${hour}:${minute} on ${day}, ${month}`;

  return `${timeString} on ${dateString}`;
}
