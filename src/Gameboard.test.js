const { Gameboard } = require("./Gameboard");

test("Gameboard can access Ship functions", () => {
  const destroyer = Gameboard("battleship");

  destroyer.setCoordinates("A7");
  console.debug(destroyer.getCoordinates());
  console.debug(destroyer.saySomethingCool());
});
