export const getCurrentDateTime = () => {
  let today = new Date()
  let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

  return { isoString: today.toISOString(), date, time }
}

export const dayPeriod = (date: Date | string) => {
  const dateObj = new Date(date)
  const hours = dateObj.getHours()
  let timeOfDay = ''

  if (hours < 12) {
    timeOfDay = 'morning'
  } else if (hours < 18) {
    timeOfDay = 'afternoon'
  } else {
    timeOfDay = 'evening'
  }

  return timeOfDay
}
