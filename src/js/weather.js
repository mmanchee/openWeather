export function changeTemp(kTemp) {
  let fTemp = (kTemp * (9/5)) - 459.67;
  fTemp = Math.floor(fTemp);
  return fTemp;
}

export function changeTime(time, timeZone) {
  let d = new Date((time + timeZone)*1000);
  let newTime = d.toUTCString();
  newTime = newTime.slice(17, 22);
  return newTime;
}