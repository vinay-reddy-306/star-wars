# Star Wars Movie

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.dev).<br>
To see this project in action, go to [Demo Star Wars](https://github.com/vinay-reddy-306/star-wars/)

## Getting Started

Clone this repo :
`git clone https://github.com/vinay-reddy-306/star-wars.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint` or `yarn lint`

To check javascript linting rules.

### `npm run format` or `yarn format`

To format or prettier codebase using `Prettier`.

## Design Motivation & Thought Process

While the assignment seems simple, this project is built with **scalability and professional engineering standards** in mind:

## Component Reusability
- `Loader`, `ErrorMessage`, and `SortableHeader` abstract away common UI logic.
- Easy to extend for other sortable lists or API-driven views.

## Scalable Architecture
- Clear separation between **store** (Redux slices), **components**, and **pages**.
- Pages contain only layout/presentation + business logic separation is encouraged with custom hooks (planned in future).

## Redux Toolkit
- Used for state consistency, caching, and better API handling.
- Easily expandable for additional slices (e.g., characters, planets).

## Front-End UX
- Minimal but clean styling using `flexbox` and consistent layout.
- Sort icons help users understand current state.
- Centered layout enhances focus and aesthetics.
- Error handling and loading feedback make the UI robust.


## Folder Structure

```
|-- src/
    |-- components/
        |-- ErroMessage.js
        |-- Header.js
        |-- Loader.js
        |-- SortableHeader.js
    |-- pages/
        |-- MovieDetailPage.js
        |-- MovieListPage.js
        |-- NotFound.js
    |-- store/
        |-- index.js
        |-- moviesSlice.js
    |-- styles/
        |-- App.css
        |-- index.css
    |-- App.js
    |-- index.js
```

- `components` : Folder to put all shared Component
- `pages` : Folder to put both movieList, movieDetail and notFound page
- `store`: Folder to put all store related data
- `styles` : Folder to put our Styles that reusable

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `16px` propeties in css to help ours styling more easier handling Resposive.
