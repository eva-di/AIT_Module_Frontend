const drinks = [
    { name: "Bloody Mary", strength: 14, price: 7 },
    { name: "Jin", strength: 25, price: 4 },
    { name: "Beer", strength: 7, price: 3.5 },
    { name: "Cider", strength: 2, price: 5 },
    { name: "Beer", strength: 6, price: 5 },
  ];

  // найдите индекс Jin
  // замените на объект "Tequilla"

  const indexOfJin = drinks.findIndex((drink) => drink.name === "Jin");
  console.log(indexOfJin);
  if (indexOfJin !== -1) {
  drinks.splice(indexOfJin, 1, { name: "Tequilla", strength: 35, price: 6 });
  }
  console.log(drinks);

  // Задание 2 
// Сделайте все напитки в масиве крепче на 1 градус
//   for (let i = 0; i<drinks.length; i++) {
//     drinks[i].strength++;
//   }
drinks.forEach((drink) => drink.strength++);

  console.log(drinks);


  // стоимость всех пив
  const totalCostBeer = drinks.reduce((acc, drink) => {
    if (drink.name.toLowerCase() === "beer") {
      return acc + drink.price;
    }
    return acc;
  }, 0);
 
  console.log(totalCostBeer);

  // filter 

  // создает новый массив, в него входят только элементы, удовлетворяющие условию
  const beers = drinks.filter(a => a.name === "Beer");
  console.log(beers);
  // [
  // { name: 'Beer', strength: 8, price: 3.5 },
  // { name: 'Beer', strength: 7, price: 5 }
// ]



