const ArrayTemp1 = [17, 21, 23];
const ArrayTemp2 = [17, 5, 11, 3];
function printForecasted(arr) {
  let sumString = "";
  dayNumbers = 1;
  for (let i = 0; i < ArrayTemp2.length; i++, dayNumbers++) {
    sumString = sumString + `...${ArrayTemp2[i]}C ${dayNumbers} ${dayNumbers === 1 ? "day ago" : "days ago"}`;
  }
  console.log(sumString);
}

console.log(printForecasted(ArrayTemp2));
