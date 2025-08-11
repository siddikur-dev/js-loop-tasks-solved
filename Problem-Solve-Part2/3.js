/**
 *  Your task is to calculate the total budget required to buy electronics:

    Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.*/
function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptop = 35000 * laptopQuantity;
  const tablet = 15000 * tabletQuantity;
  const mobile = 20000 * mobileQuantity;
  const total = laptop + tablet + mobile;
  return total;
}
console.log("Total money required:", calculateElectronicsBudget(2, 1, 0));
