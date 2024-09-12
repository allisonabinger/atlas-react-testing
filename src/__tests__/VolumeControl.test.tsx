import { render, fireEvent } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import VolumeControl from "../components/VolumeControl";

describe("Volume Control Component", () => {
  test("renders correctly and matches snapshot", () => {
    const { container } = render(<VolumeControl />);
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot when muted", () => {
    const { container, getAllByRole } = render(<VolumeControl />);
    const buttons = getAllByRole("button");
    const muteButton = buttons[0];

    fireEvent.click(muteButton);
    expect(container).toMatchSnapshot();
  });

  test("matches snapshot at a different volume", () => {
    const { container, getAllByRole } = render(<VolumeControl />);

    const sliders = getAllByRole("slider");
    const volumeSlider = sliders[0];

    fireEvent.change(volumeSlider, {
      target: {
        value: "50",
      },
    });
    expect(container).toMatchSnapshot();
  });
});
