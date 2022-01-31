import React from "react";
import { render, screen } from "@testing-library/react";
import Demo from "./Demo";

describe("Demo tests", () => {
  test("test color red", () => {
    render(<Demo />);
    const title = screen.getByRole("heading", { level: 1 });
    const styles = getComputedStyle(title);
    expect(styles.color).toBe("red");
  });
  test("test text decoration", () => {
    render(<Demo />);
    const title = screen.getByRole("heading", { level: 1 });
    const styles = getComputedStyle(title);
    expect(styles.textDecoration).toBe("line-through");
  });
});
