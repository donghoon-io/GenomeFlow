function tens(num) {
  return num.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}
function timeDiff(pre, post, isHour = false) {
  let diff = (Date.parse(post) - Date.parse(pre)) / 1e3;
  let m = Math.floor(diff / 60 % 60);
  let h = isHour ? Math.floor(diff / 3600) : Math.floor(diff / 3600) % 24;
  let d = Math.floor(diff / 86400);
  return isHour ? `${tens(h)}:${tens(m)}` : `${d}:${tens(h)}:${tens(m)}`;
}
export { timeDiff as t };
