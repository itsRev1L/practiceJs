const bill = 430;

const tip = (bill >= 50) & (bill <= 300) ? (bill / 100) * 15 : (bill / 100) * 20;

console.log(`the bill was ${bill}, the tip was ${tip} and the total money was ${bill + tip}`);
