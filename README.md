
# Form Generator

This project is a dynamic form generator built with React and TypeScript. It allows for the creation of forms based on a JSON configuration file (`pages.json`).

## Project Structure

```
src/
components/
field-renderer.tsx
form-generator.tsx
context/
form-context.tsx
theme-context.tsx
hooks/
conditional-nav.ts
pages/
welcome.tsx
review.tsx
styles/
form-generator.css
utils/
evaluate-conditions.ts
handle-submit.ts
pages.json
style-config.json
```

## Installation

To install the project dependencies, run:

```sh
npm install
```

## Running the Project

To start the development server, run:

```sh
npm start
```

## Components

### FieldRenderer

The `FieldRenderer` component is responsible for rendering different types of form fields based on the configuration provided in the `pages.json` file.

### GenerateForm

The `GenerateForm` component handles the form generation logic, including conditional navigation and form submission.

## Context

### FormDataContext

The `FormDataContext` provides the form data and navigation functions to the components.

### ThemeContext

The `ThemeContext` provides theming information to style the form components.

## Hooks

### useConditionalNavigation

The `useConditionalNavigation` hook handles the conditional navigation logic based on the form data and the conditions specified in the `pages.json` file.

## Utilities

### evaluateConditions

The `evaluateConditions` utility function evaluates the conditions specified in the `pages.json` file to determine whether a page should be displayed.

### handleSubmit

The `handleSubmit` utility function handles the form submission logic, including validation and data aggregation.

## Pages

### WelcomePage

The `WelcomePage` component renders the welcome page of the form.

### ReviewPage

The `ReviewPage` component renders the review page, displaying all the form data for final review before submission.

## Styles

The project uses a CSS file (`form-generator.css`) for styling the form components.

## Configuration

### pages.json

The `pages.json` file contains the configuration for the form pages, including fields, buttons, and conditional logic.

### style-config.json

The `style-config.json` file contains the theming information used by the `ThemeContext`.
