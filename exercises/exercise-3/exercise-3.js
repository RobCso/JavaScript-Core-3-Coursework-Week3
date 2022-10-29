let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let  [hotCakes, applePie, eggMc, sausageMC, hotCoffe, hashBrown] = order

console.log(`QTY    ITEM        TOTAL`)
console.log(`${hotCakes.quantity}      ${hotCakes.itemName}  ${hotCakes.unitPrice*hotCakes.quantity}`);
console.log(
  `${applePie.quantity}      ${applePie.itemName}  ${
    applePie.unitPrice * applePie.quantity
  }`
);
console.log(
  `${eggMc.quantity}      ${eggMc.itemName}  ${
    (eggMc.unitPrice * eggMc.quantity).toFixed(2)
  }`
);
console.log(
  `${sausageMC.quantity}      ${sausageMC.itemName}  ${
    (sausageMC.unitPrice * sausageMC.quantity).toFixed(2)
  }`
);

console.log(
  `${hotCoffe.quantity}      ${hotCoffe.itemName}  ${
    (hotCoffe.unitPrice * hotCoffe.quantity).toFixed(2)
  }`
);

console.log(
  `${hashBrown.quantity}      ${hashBrown.itemName}  ${
    (hashBrown.unitPrice * hashBrown.quantity).toFixed(2)
  }`
);
console.log(" ")
console.log(`Total: ${
  hotCakes.unitPrice * hotCakes.quantity +
  applePie.unitPrice * applePie.quantity +
  eggMc.unitPrice * eggMc.quantity +
  sausageMC.unitPrice * sausageMC.quantity +
  hotCoffe.unitPrice * hotCoffe.quantity +
  hashBrown.unitPrice * hashBrown.quantity
} 
  `);