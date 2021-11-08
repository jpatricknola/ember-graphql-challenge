/**
 * String date to browser local date
 * @param {*} d
 */
export const convertUTCDateToLocalDate = (d) => {
  const date = new Date(d);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000);
};

export const convertUTCDateToHumanizedDate = (d) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return convertUTCDateToLocalDate(d).toLocaleDateString("en-US", options)
}

export const getTimefromUTCDate = (utcDate) => {
  const options = { hour: '2-digit', minute: '2-digit' }

  return convertUTCDateToLocalDate(utcDate).toLocaleTimeString('en-US', options).replace(/^0(?:0:0?)?/, '')
}

export const startAndEndTime = (utcDate, duration) => {
  const d = new Date(utcDate)
  const endDate = d.setMinutes(d.getMinutes() + duration)

  return `${getTimefromUTCDate(utcDate)} to ${getTimefromUTCDate(endDate)}`
}
