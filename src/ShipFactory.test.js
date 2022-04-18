const { ShipFactory } = require("./ShipFactory");

test("sets coordinates upon creation", () => {
  let destroyer = ShipFactory("destroyer", "F1");
  expect(destroyer.getCoordinates()).toEqual(["F1"]);
});

test("hit works", () => {
  let submarine = ShipFactory("submarine", "E3", "E4");
  expect(submarine.hit("E5")).not.toBeTruthy();
  expect(submarine.hit("E3")).toBeTruthy();
});

test("isSunk works", () => {
  let destroyer = ShipFactory("destroyer", "A1");
  expect(destroyer.isSunk()).not.toBeTruthy();
  destroyer.hit("A1");
  expect(destroyer.isSunk()).toBeTruthy();
});
