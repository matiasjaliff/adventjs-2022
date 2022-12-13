import fitsInOneBox from "../src/reto-#4";

it("test reto-#4", () => {
  const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
  ];
  const boxes2 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
  ];
  const boxes3 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
  ];

  expect(fitsInOneBox(boxes1)).toBe(true);
  expect(fitsInOneBox(boxes2)).toBe(false);
  expect(fitsInOneBox(boxes3)).toBe(true);
});
