# Espresso Tracker

Viewable at [espressotracker.netlify.app](https://espressotracker.netlify.app/)

A data tracking [React](https://reactjs.org/) application aimed at Home Baristas having trouble tracking the endless variables affecting the espresso brewing process.

## Data Input

Espresso Trackers forms were built using [React-Hook-Form](https://react-hook-form.com/) for its concise code structure and performance advantages, which prevent unnecessary component re-rendering unlike other Form Handlers like Formik or Redux.

## Form Validation

[Yup](https://github.com/jquense/yup) is used to validate the form inputs. It uses a JavaScript schema builder for value parsing and validation. [Yup](https://github.com/jquense/yup) allows the developer to define a schema which value matches the user input.

If the user input is not matched to set schema values it returns the user with corresponding error messages, preventing submission of invalid types, blank fields, negative numbers or unusually large numbers.

## Data Storage

Data is currently being stored using the [**LocalStorage**](https://developer.mozilla.org/en-US/docs/Web/API/Storage) API.

## Styling

Styled using [**styled-components**](https://www.styled-components.com) and React UI Framework [**Material-UI**](https://material-ui.com/).

## Linting and Formatting

The code is formatted using **[Prettier](https://github.com/prettier/prettier)** and linted using **[ESLint](https://eslint.org/)**.

## Continuous Deployment

As soon as changes are merged into the `master` branch, the page will automatically be built by **[Netlify](https://netlify.com)**. It is then deployed as a static site using the Netlify CDN.
