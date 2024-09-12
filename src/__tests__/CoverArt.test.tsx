// Test Suite for the CoverArt Component

import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";
import SoulCanvas from "../assets/SoulCanvas.jpeg";

// Snapshot Tests for CoverArt

test("CoverArt renders an image", () => {
  const { container } = render(<CoverArt imageURL={SoulCanvas} />);
  expect(container).toMatchSnapshot();
});

test("CoverArt will not render without a URL", () => {
  const { container } = render(<CoverArt imageURL="" />);
  expect(container).toMatchSnapshot();
});

test("CoverArt will not render without a valid URL", () => {
  const { container } = render(<CoverArt imageURL="525600" />);
  expect(container).toMatchSnapshot();
});
