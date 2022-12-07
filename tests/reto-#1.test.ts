import wrapping from "../src/reto-#1";

it("test reto-#1", () => {
  const gifts = ["cat", "game", "socks"];
  const expected = [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******",
  ];

  expect(wrapping(gifts)).toEqual(expected);
});
