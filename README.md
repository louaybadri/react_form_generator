
# Form Generator

## Overview
Form Generator is a React-based application designed to dynamically generate forms based on a JSON configuration. It leverages the Context API for state management and Tailwind CSS for styling.

## Technologies Used
- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: For utility-first CSS styling.
- **Context API**: For managing global state.
- **npm**: For package management.

## Folder Structure
```
src/
├── components/
│   ├── GenerateForm.tsx
│   ├── field_renderer.tsx
│   └── formGenerator.css
├── context/
│   └── FormContext.tsx
├── hooks/
│   └── conditional_nav.ts
├── models/
│   └── interfaces.ts
├── pages.json
├── utils/
│   ├── evaluateConditions.ts
│   └── validateField.ts
└──index.tsx
```

## Context API
The Context API is used to manage the form data and navigation state across the application.

### `FormDataContext`
- **formData**: An object containing the form data.
- **addFormData**: A function to add new data to the form.
- **handleNext**: A function to navigate to the next page.
- **currentPage**: The index of the current page.

### `FormDataProvider`
The `FormDataProvider` component wraps the application and provides the context values to its children.

## Components
### `GenerateForm`
The main component that generates the form based on the current page configuration.

### `FieldRenderer`
A component responsible for rendering individual form fields.


### `ReviewPage`
A component for displaying a review of the form data.

### `WelcomePage`
A component for displaying the welcome page.

### `FormPage`
A component for displaying the form fields for the current page.

## Hooks
### `useConditionalNavigation`
A custom hook that handles conditional navigation based on the form data and page configuration.

## Utilities
### `evaluateConditions`
A utility function to evaluate conditional logic for displaying pages or fields.

### `validateField`
A utility function to validate form fields based on their validation rules.

## Styling
The project uses Tailwind CSS for styling. The `formGenerator.css` file contains additional custom styles.

## Getting Started
### Prerequisites
- Node.js
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/form-generator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd form-generator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm start
```

### Building the Application
Build the application for production:
```bash
npm run build
```


