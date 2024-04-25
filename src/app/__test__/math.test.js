import { add } from "./math.js";

test("Should summarize all number values in an array", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(8);
});
