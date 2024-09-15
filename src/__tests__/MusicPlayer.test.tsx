// MusicPlayer Test Suite
import { render, screen, waitFor } from "@testing-library/react";
import { expect, test, beforeAll, afterAll, afterEach, describe, vi } from "vitest";
import MusicPlayer from "../MusicPlayer";
import { MusicPlayerProvider } from "../MusicPlayerContext";
import { server } from "./mock";

// mock components
vi.mock("@lottiefiles/react-lottie-player", () => ({
  Player: () => <div data-testid="loading-animation" />,
}));

vi.mock("../components/CurrentlyPlaying", () => () => (
  <div>Currently Playing Component</div>
));

vi.mock("../components/Playlist", () => () => <div>Playlist Component</div>);

// Set up MSW server for mocking API calls
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const renderWithProvider = (ui: React.ReactNode, { loading = false, playlist = [] } = {}) => {
  return render(
    <MusicPlayerProvider value={{ loading, playlist }}>
      {ui}
    </MusicPlayerProvider>
  );
};
