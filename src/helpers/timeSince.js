export default function timeSince(timeStamp) {
  let now = new Date(),
    secondsPast = (now.getTime() - timeStamp) / 1000;
  if (secondsPast < 60) {
    return parseInt(secondsPast) + " sec ago";
  }
  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + " min ago";
  }
  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + " hour ago";
  }
  if (secondsPast > 86400) {
    let day = timeStamp.getDate();
    let month = timeStamp
      .toDateString()
      .match(/ [a-zA-Z]*/)[0]
      .replace(" ", "");
    let year =
      timeStamp.getFullYear() === now.getFullYear()
        ? ""
        : " " + timeStamp.getFullYear();
    return day + " " + month + year;
  }
}
