/* Use Destructuring Assignment to Extract Values from Objects */
const HIGH_TEMPRATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
}
const {yesterday, today, tomorrow} = HIGH_TEMPRATURES;
console.log(today);