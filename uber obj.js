class UberPriceCalculator {
  constructor(baseFare, costPerMile, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerMile = costPerMile;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInMiles, timeInMinutes) {
    const fare = 
      this.baseFare +
      distanceInMiles * this.costPerMile +
      timeInMinutes * this.costPerMinute;
    return fare;
  }
}


const calculator = new UberPriceCalculator(2.0, 1.5, 0.2); // Replace with actual rates

const distance = 5; // 5 miles
const time = 15; // 15 minutes

const price = calculator.calculatePrice(distance, time);
console.log(`The estimated Uber price is Rs{price.toFixed(2)}`);
