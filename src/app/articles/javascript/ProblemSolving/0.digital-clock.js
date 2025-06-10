// should return time as HH:MM:SS 
// if its 12hours format then it should return HH:MM:SS AM/PM
// for 24 hours format its not required for return HH:MM:SS where HH will be 24 hours format.
function getTime(format) {
  const allowedFormats = ['12hours', '24hours'];

  if (allowedFormats.find(f => f === format)) {
    const is12HourFormat = format === '12hours' ? true : false
    const dateTimeFormatOptions = {
      hour12: is12HourFormat,
      timeZone: 'Europe/London',
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }
    return new Date().toLocaleTimeString('en-GB', dateTimeFormatOptions)
  } else {
    throw new Error("Only accepatable format are '12hours' and  '24hours' ")
  }
}

setInterval(
  () => console.log(getTime('12hours')), 1000
)
