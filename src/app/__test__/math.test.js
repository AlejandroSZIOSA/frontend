import { expect, it } from "@testing-library/react";

import { add } from "./math.js";

it("Should summarize all number values in an array", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
