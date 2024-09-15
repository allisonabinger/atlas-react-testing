import { vi, describe, test, beforeEach, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { useMusicPlayer } from "../MusicPlayerContext";
import PlayListItem from "../components/CurrentlyPlaying";
import CurrentlyPlaying from "../components/CurrentlyPlaying";

vi.mock("../MusicPlayerContext", () => ({
  useMusicPlayer: vi.fn(),
}));

describe("Currently Playing Component", () => {
  const mockPlaySong = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders the correct cover art", () => {
    const mockSong = {
      id: 1,
      title: "Test Song",
      artist: "Test Artist",
      genre: "Rock",
      cover: "cover.jpg",
    };

    useMusicPlayer.mockReturnValue({
      isPlaying: true,
      playlist: [],
      currentSong: mockSong,
      playSong: mockPlaySong,
      //   playlist: [],
      //   playNextSong: vi.fn(),
      //   playPrevSong: vi.fn(),
      //   togglePlay: vi.fn(),
      //   loading: false,
      //   shuffle: false,
      //   setShuffle: vi.fn(),
    });

    render(<CurrentlyPlaying />);

    expect(screen.getAllByRole("img").find(img => img.src.includes(mockSong.cover))).not.toBeNull
  });
  test("renders the song title and artist", () => {
    const mockSong = {
      id: 1,
      title: "Test Song",
      artist: "Test Artist",
      genre: "Rock",
      cover: "cover.jpg",
    };

    useMusicPlayer.mockReturnValue({
      isPlaying: true,
      playlist: [],
      currentSong: mockSong,
      playSong: mockPlaySong,
      //   playlist: [],
      //   playNextSong: vi.fn(),
      //   playPrevSong: vi.fn(),
      //   togglePlay: vi.fn(),
      //   loading: false,
      //   shuffle: false,
      //   setShuffle: vi.fn(),
    });

    render(<CurrentlyPlaying />);

    expect(screen.getAllByText("Test Song")).not.toBeNull();
    expect(screen.getAllByText("Test Artist")).not.toBeNull();
  });

  //   test("displays the current", () => {
  //     useMusicPlayer.mockReturnValue({
  //       isPlaying: false,
  //       currentSong: mockSong,
  //       playSong: mockPlaySong,
  //     });
  //     render(<PlayListItem song={mockSong} />);

  //     const soundbar = screen.queryByRole("img");
  //     expect(soundbar).toBeNull;
  //   });
});
