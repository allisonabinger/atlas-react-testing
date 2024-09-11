<h1 align="center">
<img src="https://typescript-eslint.io/assets/files/logo-62ab572de114d03f1ec685d989f92cd6.svg" align="left" width="100">
React Unit Testing
<img src="https://typescript-eslint.io/assets/files/logo-62ab572de114d03f1ec685d989f92cd6.svg" align="right" width="100"></h1>

&nbsp;
&nbsp;

## Intro
This project consists of unit tests for the Atlas Music Player.

## Learning Objectives

1. **How to write snapshot tests**

2. **How to test components and hooks**

3. **How to apply mocking and spying to unit tests**

4. **How to generate code coverage reports for unit tests**


## Resources and Descriptions

[React Unit Testing - Jeremiah Swank](https://atlas-jswank.github.io/blog/react-testing/)
Covers key concepts and benefits of using TypeScript

[How to use TypeScript - Jeremiah Swank](https://atlas-jswank.github.io/blog/how-to-use-typescript/)
Contains tutorials and examples of using TypeScript.

[TypeScript 5.0 Cheat Sheet - SitePen Engineering*](https://www.sitepen.com/blog/typescript-cheat-sheet)
An quick reference guide for TypeScript.

[React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
An quick reference guide for using TypeScript with React.

## Usage

- Run `npm install` to install dependencies
- Run `npm run dev` to start the dev server
- Open `http://localhost:5173` in a browser

---

## Notes

### Dev Container

There is a dev container preconfigured with Node 20 on linux. If you would like to use the dev container:

- Install the [Dev Containers Plugin](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code
- Open the command pallet (Cntrl / Command + Shift + P) in VS Code
- Select "Dev Container: Reopen in Container"

For more information on using dev containers see this [tutorial](https://atlas-jswank.github.io/blog/dev-containers/) or the [official documentation](https://containers.dev/)

### Important Files/Folders

- `index.html`: This is the html file that appears when the dev server starts up.
- `src`: All javascript/jsx code goes in this directory
- `src/assets`: Any static assets such as images that are loaded through the javascript files goes here.
- `src/app.jsx`: The is the main app component for the entire app.

### Important Commands

- `npm run dev`: Starts dev server with Hot Module Reloading on port 5173. Anytime a file changes, the changes will automatocally be reflected in the browser
- `npm run lint`: Run the lint checker with eslint to check for known linting issues
- `npm run format`: Run prettier to automatically reformat files

## Authors/Contributors to this project
This project was forked from the [Music Player](https://github.com/allisonabinger/atlas-music-player) project, which was a Atlas School Project. It was built from a very basic template of a Vite React App with empty and non-existent components.

This README was made with :heart: by Allison Binger, student at Atlas School Tulsa. Find me on [GitHub](https://github.com/allisonabinger) or [LinkedIn](https://linkedin.com/in/allisonbinger)! :smile_cat:
