# Codebase

**A Next.js project foundation built for rapid development.**

## Prerequisites

- Node.js 18.18 or later is required.
- A modern web browser (Chrome, Firefox, Safari, Edge).
- Supported operating systems: Windows (including WSL), Linux, and macOS.

## Installation

1. Clone this repository to your local machine using Git.
2. Navigate to the project directory:

```bash
  cd codebase-next-ts
```

3. Create a `.env` file in the root directory based on the `.env.example` file. You will need to obtain the required environment variables from the lead frontend developer.
4. Install project dependencies:

```bash
  npm install
```

or if you are using yarn:

```bash
  yarn install
```

## Development

1. Start the development server:

```bash
  npm run dev
```

2. Open your web browser and navigate to:

```bash
  http://localhost:3000
```

The application should now be running in development mode.

## Production Build

1. Create a production-ready build of the project:

```bash
  npm run build
```

2. Start the production server:

```bash
  npm start
```

3. Open your web browser and navigate to:

```bash
  http://localhost:3000
```

The application should now be running in production mode.

## Testing

To ensure the quality and correctness of the code, this project uses automated tests. Follow these steps to run the tests:

1. To run all tests, use the following command:

```bash
  npm test
```

2. To generate a coverage report, use the following command:

```bash
  npm run test:cover
```

After running the coverage command, a report will be generated in the `./coverage/lcov-report/` directory. Open the `index.html` file in your browser to view the report.

## Technologies Used

This project leverages a number of cutting-edge libraries and frameworks:

- **React**: A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.
- **Next.js**: A powerful React framework that enables server-side rendering, static site generation, and more.
- **React Query**: Powerful library for data fetching and state management.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Hook Form**: Streamlined form validation and state management.
- **Yup**: Schema-based validation for JavaScript objects.
- **TypeScript**: A statically typed superset of JavaScript that adds optional types, classes, and modules to the language, providing enhanced tooling and developer productivity.

For a list of devDependencies, refer to the `package.json` file in the project root.

## Resources

- [Development Guidelines](./docs/DEVELOPMENT-GUIDELINES.md)

---

Feel free to reach out to us if you have any questions or need assistance with the project.

Happy coding!
