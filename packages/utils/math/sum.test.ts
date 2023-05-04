import { sum } from "./sum";

describe("sum function", () => {
  it("should sum numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, -10)).toBe(-8);
    expect(sum(17, -10)).toBe(7);
    expect(sum(-100, 123)).toBe(23);
    expect(sum(-17, -10)).toBe(-27);
  });
});
