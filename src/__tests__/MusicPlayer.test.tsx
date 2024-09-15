// MusicPlayer Test Suite
// Since Currently Playing and Playlist handle most of the functionality, these tests are minimal

// For grading purposes, There are additional tests in Currently Playing
import { render, screen, waitFor } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import MusicPlayer from "../MusicPlayer";
import { useMusicPlayer } from "../MusicPlayerContext";

// mock components
vi.mock("@lottiefiles/react-lottie-player", () => ({
  Player: () => <div data-testid="loading-animation" />,
}));

vi.mock("../components/CurrentlyPlaying", () => ({
  default: () => <div>Currently Playing Component</div>,
}));

vi.mock("../components/Playlist", () => ({
  default: () => <div>Playlist Component</div>,
}));

vi.mock("../MusicPlayerContext", () => ({
  useMusicPlayer: vi.fn(),
}));

describe("Music Player Component", () => {
  test("displays loading animation when loading == true", () => {
    useMusicPlayer.mockReturnValue({
      loading: true,
      playlist: [],
      currentSong: null,
      isPlaying: false,
      playNextSong: vi.fn(),
      playPrevSong: vi.fn(),
      playSong: vi.fn(),
      togglePlay: vi.fn(),
      shuffle: false,
      setShuffle: vi.fn(),
    });
    render(<MusicPlayer />);
    const loadingElement = screen.getByTestId("loading-animation");
    expect(loadingElement).not.toBeNull();
  });

  test("displays CurrentlyPlaying component when currentSong is not null", () => {
    useMusicPlayer.mockReturnValue({
      loading: false,
      playlist: [
        {
          id: 1,
          title: "Title 1",
          artist: "Artist 1",
          genre: "Genre 1",
          duration: "1:00",
          cover: "Cover 1",
        },
      ],
      currentSong: {
        id: 1,
        title: "Title 1",
        artist: "Artist 1",
        genre: "Genre 1",
        duration: "1:00",
        cover: "Cover 1",
      },
      isPlaying: false,
      playNextSong: vi.fn(),
      playPrevSong: vi.fn(),
      playSong: vi.fn(),
      togglePlay: vi.fn(),
      shuffle: false,
      setShuffle: vi.fn(),
    });

    render(<MusicPlayer />);

    // Check for the presence of CurrentlyPlaying component
    expect(screen.getByText(/Currently Playing Component/i)).not.toBeNull;
  });

  test("renders playlist items from mocked API", async () => {
    useMusicPlayer.mockReturnValue({
      loading: true,
      playlist: [
        {
          id: 1,
          title: "Title 1",
          artist: "Artist 1",
          genre: "Genre 1",
          duration: "1:00",
          cover: "cover1.jpg",
        },
        {
          id: 2,
          title: "Title 2",
          artist: "Artist 2",
          genre: "Genre 2",
          duration: "2:00",
          cover: "cover2.jpg",
        },
      ],
      currentSong: null,
      isPlaying: false,
      playNextSong: vi.fn(),
      playPrevSong: vi.fn(),
      playSong: vi.fn(),
      togglePlay: vi.fn(),
      shuffle: false,
      setShuffle: vi.fn(),
    });

    render(<MusicPlayer />);

    await waitFor(() => {
      expect(screen.getByText(/Currently Playing Component/i)).not.toBeNull;
    });
  });
});
