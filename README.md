# Imagine Pharma Solutions

Imagine Pharma Solutions is a React and Vite web application for pharmaceutical research training, career guidance, consulting, and specialty chemical services. It was built as a freelance client project for a startup founder, with a polished, professional presentation for students, professionals, and industry partners.

## What It Includes

- A modern landing page with service highlights and clear calls to action
- Dedicated sections for About, Services, Products, Pharmaceutical Intermediates, Specialty Chemicals, Career, and Contact
- Route-based navigation with smooth page transitions
- Responsive layouts designed for desktop and mobile use
- Shared UI components for reusable sections, navigation, and footer content

## Tech Stack

- React 19
- Vite
- React Router
- Framer Motion
- Tailwind CSS
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run Linting

```bash
npm run lint
```

## Project Structure

```text
src/
	components/      Shared layout and section components
	data/            Structured content for pharmaceutical intermediates
	pages/           Route-level pages for the main site sections
	assets/          Images and PDF assets used across the site
	App.jsx          Application routes and layout shell
	main.jsx         App entry point
	index.css        Global styles and theme tokens
```

## Notes

- This project was delivered on demand for a client startup.
- The application uses a site-wide theme wrapper in `src/App.jsx`.
- Route definitions live in `src/App.jsx`, with the main entry points available from the top navigation.
- The project is intentionally kept in JavaScript for simplicity and faster iteration.
