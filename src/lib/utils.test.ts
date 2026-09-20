import { expect, test, describe } from "vitest";
import { mergeClassNames } from "./utils";

describe("mergeClassNames", () => {
  test("merges basic tailwind classes", () => {
    expect(mergeClassNames("p-2", "p-4")).toBe("p-4");
    expect(mergeClassNames("text-red-500", "text-blue-500")).toBe("text-blue-500");
  });

  test("handles conditional classes with clsx", () => {
    expect(mergeClassNames("p-2", false && "m-2", true && "m-4")).toBe("p-2 m-4");
    expect(mergeClassNames({ "bg-red-500": true, "bg-blue-500": false })).toBe("bg-red-500");
    expect(mergeClassNames(["p-2", "m-2"], "flex")).toBe("p-2 m-2 flex");
  });

  test("resolves tailwind class conflicts correctly", () => {
    expect(mergeClassNames("px-2 py-1", "p-4")).toBe("p-4");
    expect(mergeClassNames("flex-col", "flex-row")).toBe("flex-row");
    expect(mergeClassNames("bg-red-500 hover:bg-blue-500", "hover:bg-green-500")).toBe("bg-red-500 hover:bg-green-500");
  });

  test("handles arbitrary values", () => {
    expect(mergeClassNames("bg-[#123456]", "bg-[#654321]")).toBe("bg-[#654321]");
    expect(mergeClassNames("w-[10px]", "w-[20px]")).toBe("w-[20px]");
    expect(mergeClassNames("text-[14px]", "text-[16px]")).toBe("text-[16px]");
  });

  test("handles empty and falsy values", () => {
    expect(mergeClassNames("", null, undefined, 0, false, "p-2")).toBe("p-2");
  });
});
