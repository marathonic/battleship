import { Ship } from "./shipFactoryWithAClass";

test("can create a ship", () => {
  let destroyer = new Ship("destroyer");
  destroyer.setLength();
  expect(destroyer.model).toMatch("destroyer");
});

test("ship spans coordinates", () => {
  let cruiser = new Ship("cruiser");
  cruiser.setLength();
  expect(cruiser.length).toBe(3);
  expect(cruiser.setCoordinates("A1", "B1")).toEqual(["A1", "B1"]);
});

test("ship gets hit if it contains coordinates", () => {
  let submarine = new Ship("submarine");
  submarine.setLength();
  submarine.setCoordinates("D1", "D2");
  console.debug(submarine.getCoordinates());
  expect(submarine.hit("D2")).toEqual(["D1"]);
  console.debug(submarine.getCoordinates());

  // expect(submarine.hit("D2")).toMatch("hit");
});

test("missed shots just miss", () => {
  let destroyer = new Ship("destroyer");
  destroyer.setLength();
  destroyer.setCoordinates("E3");
  expect(destroyer.hit("E2")).toMatch("miss");
});

test("isSunk() repots status", () => {
  let battleship = new Ship("battleship");
  battleship.setLength();
  battleship.setCoordinates("F1", "F2", "F3", "F4");
  console.debug(battleship.getCoordinates());
});

// test('returns length', () => {
//   let battleship = new Ship('battleship')
//   expect()
// })

// test("isSunk returns Yes or HP", () => {
// let carrier = new Ship("carrier");
// carrier.setLength();
// carrier.setCoordinates("B2", "B3", "B4", "B5", "B6");
// carrier.hit("B2");
// expect(carrier.isSunk()).toMatch("HP: 4");
// carrier.hit("B3");
// expect(carrier.isSunk()).toMatch("HP: 3");
// console.debug(carrier.getCoordinates());
// carrier.hit("B4");
// expect(carrier.isSunk()).toMatch("HP: 2");
// carrier.hit("B5");
// carrier.hit("B6");
// expect(carrier.isSunk()).toMatch("sunk");
// });
