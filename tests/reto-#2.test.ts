import countHours from "../src/reto-#2";

it("test reto-#2", () => {
  const year = 2022;
  const holidays = ["01/06", "04/01", "12/25"];

  expect(countHours(year, holidays)).toBe(4);
});
