import { sum } from "../sum";
test("test to check if the function gives sum of two digits", () => {
  const result = sum(2, 3);
  
  //Assertion
  expect(result).toBe(5);
});
