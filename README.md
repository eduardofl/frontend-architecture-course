# Frontend architecture course

Project built using NextJS, developed while taking Alura's Frontend architecture course. During the classes, some concepts and patterns related to frontend architecture were covered, and this repository works as notes/examples.

## Topics covered

- What is a Monorepo and what advantages does it bring to projects
- What is a micro-frontend
- How to configure Project Workspaces using Yarn
- How to create packages that can be shared across the monorepo subprojects
- Create scripts that runs for all subprojects, and alias for scripts that are subproject specific
- Create Typescript configuration package, with basic setup for all packages/projects within the monorepo
- Create Lint and Prettier configuration package, with basic setup for all packages/projects within the monorepo
- Create Jest and 'react-testing-library' configuration package, with basic setup for all packages/projects within the monorepo
- Github features:
  - Dependency management with Dependabot
  - Protecting branches with rules
  - Assign responsibles by scope, using CODEOWNERS file

---

## Getting Started

### Installation

Clone the repository
```
git clone https://github.com/eduardofl/frontend-architecture-couse.git
```
Install the dependencies:
```
yarn
```

### Running in development mode

To run a specific project in development mode, like 'web-public', just run the command:

```
yarn dev:web-public
```

This will start a development server at http://localhost:3000. You can access it by opening this URL in your browser.

### Building

To create the build of the 'web-public' project, use the command:

```
yarn build:web-public
```

Or create the build and run:
```
yarn build:web-public && yarn start:web-public
```

---

## Code check and tests

### Running Lint

To run lint through all subprojects, type the command:

```
yarn lint
```

For a specific project, use:

```
yarn lint:web-public
```

### Running tests

To run tests in all subprojects, type the command:

```
yarn test
```

For a specific project, use:

```
yarn test:web-public
```
