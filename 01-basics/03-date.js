const myDate = new Date()
// console.log(`todays date is :\n${myDate}`)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.getDate())

console.log(myDate.toLocaleString().substring(11))

console.log(myDate.toLocaleString('default', {
    weekday: "long"
}))