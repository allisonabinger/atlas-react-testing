// Test Suite for the SongTitle Component

import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import SongTitle from "../components/SongTitle";

// Snapshot Tests for CoverArt
describe("SongTitle Component", () => {
  test("SongTitle renders the title and artist", () => {
    const { container } = render(
      <SongTitle title="TestSong" artist="TestArtist" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("CoverArt will not render without a valid title and artist", () => {
    const { container } = render(<SongTitle title="" artist="" />);
    expect(container).toMatchSnapshot();
  });

  test("CoverArt will not render without a valid title", () => {
    const { container } = render(<SongTitle title="" artist="TestArtist" />);
    expect(container).toMatchSnapshot();
  });

  test("CoverArt will not render without a valid artist", () => {
    const { container } = render(<SongTitle title="TestSong" artist="" />);
    expect(container).toMatchSnapshot();
  });
});
