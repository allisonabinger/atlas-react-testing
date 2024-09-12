import { setupServer } from 'msw/node'
import { rest } from "msw"; // Use rest for HTTP request mocking

export const handlers = [
  rest.get("https://api.example.com/songs", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: "Title 1",
          artist: "Artist 1",
          genre: "Genre 1",
          duration: "1:00",
          cover: "Cover 1",
        },
        {
          id: 2,
          title: "Title 2",
          artist: "Artist 2",
          genre: "Genre 2",
          duration: "2:00",
          cover: "Cover 2",
        },
        {
          id: 3,
          title: "Title 3",
          artist: "Artist 3",
          genre: "Genre 3",
          duration: "3:00",
          cover: "Cover 3",
        },
        {
          id: 4,
          title: "Title 4",
          artist: "Artist 4",
          genre: "Genre 4",
          duration: "4:00",
          cover: "Cover 4",
        },
        {
          id: 5,
          title: "Title 5",
          artist: "Artist 5",
          genre: "Genre 5",
          duration: "5:00",
          cover: "Cover 5",
        },
        {
          id: 6,
          title: "Title 6",
          artist: "Artist 6",
          genre: "Genre 6",
          duration: "6:00",
          cover: "Cover 6",
        },
        {
          id: 7,
          title: "Title 7",
          artist: "Artist 7",
          genre: "Genre 7",
          duration: "7:00",
          cover: "Cover 7",
        },
        {
          id: 8,
          title: "Title 8",
          artist: "Artist 8",
          genre: "Genre 8",
          duration: "8:00",
          cover: "Cover 8",
        },
        {
          id: 9,
          title: "Title 9",
          artist: "Artist 9",
          genre: "Genre 9",
          duration: "9:00",
          cover: "Cover 9",
        },
        {
          id: 10,
          title: "Title 10",
          artist: "Artist 10",
          genre: "Genre 10",
          duration: "10:00",
          cover: "Cover 10",
        },
      ]),
    );
  }),
];

export const server = setupServer(...handlers);
