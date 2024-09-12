import { vi, describe, test, beforeEach, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useMusicPlayer } from "../MusicPlayerContext";
import PlayListItem from "../components/PlayListItem";

vi.mock("../MusicPlayerContext", () => ({
  useMusicPlayer: vi.fn(),
}));

describe("PlayListItem Component", () => {
  const mockPlaySong = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockSong = {
    id: 1,
    title: "Test Song",
    artist: "Test Artist",
    duration: "3:45",
    genre: "Rock",
    cover: "cover.jpg",
  };

  test("renders the song title, artist, and duration", () => {
    useMusicPlayer.mockReturnValue({
      isPlaying: false,
      currentSong: null,
      playSong: mockPlaySong,
    //   playlist: [],
    //   playNextSong: vi.fn(),
    //   playPrevSong: vi.fn(),
    //   togglePlay: vi.fn(),
    //   loading: false,
    //   shuffle: false,
    //   setShuffle: vi.fn(),
    });

    render(<PlayListItem song={mockSong} />);

    expect(screen.getByText("Test Song")).not.toBeNull();
    expect(screen.getByText("Test Artist")).not.toBeNull();
    expect(screen.getByText("3:45")).not.toBeNull();
  });

  test("does not display soundbarGIF when the current song is not playing", () => {
    useMusicPlayer.mockReturnValue({
        isPlaying: false,
        currentSong: mockSong,
        playSong: mockPlaySong,
    });
    render(<PlayListItem song={mockSong} />)

    const soundbar = screen.queryByRole("img");
    expect(soundbar).toBeNull

  });
});

// // Test Suite for the PlaylistItem Component

// import { render } from "@testing-library/react";
// import { expect, vi, test } from "vitest";
// import PlayListItem from "../components/PlayListItem";
// import { useMusicPlayer } from "../MusicPlayerContext";
// // import soundbarGIF from "../assets/soundbar.gif";

// // PlaylistItem Prop Test Song
// const mockSong = {
//   id: 1,
//   title: "Test Song",
//   artist: "Test Artist",
//   duration: "4:45",
//   genre: "Alternative",
//   cover: "test-cover.jpg",
// };

// // PlayListItem uses useMusicPlayer which affects the UI, so Mocking is required
// vi.mock("../MusicPlayerContext", () => ({
//   useMusicPlayer: vi.fn(),
// }));

// // mocking the PlaySong function
// const mockPlaySong = vi.fn();

// // mocks the context
// const mockMusicPlayerContext = {
//   playlist: [],
//   currentSong: null,
//   isPlaying: false,
//   playNextSong: vi.fn(),
//   playPrevSong: vi.fn(),
//   playSong: mockPlaySong,
//   togglePlay: vi.fn(),
//   loading: false,
//   shuffle: false,
//   setShuffle: vi.fn(),
// };

// const mockUseMusicPlayer = useMusicPlayer as unknown as vi.mock;

// test("renders a playlist item correctly when song is not playing", () => {
//   mockUseMusicPlayer.mockReturnValue(mockMusicPlayerContext);
//   const { container } = render(<PlayListItem song={mockSong} />);
//   expect(container).toMatchSnapshot();
// });
