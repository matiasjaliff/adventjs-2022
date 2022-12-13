import distributeGifts from "../src/reto-#3";

it("test reto-#3", () => {
  const packOfGifts = ["book", "doll", "ball"];
  const reindeers = ["dasher", "dancer"];

  expect(distributeGifts(packOfGifts, reindeers)).toBe(2);
});
