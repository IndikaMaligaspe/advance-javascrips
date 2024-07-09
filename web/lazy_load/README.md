# Lazy Loading Example in TypeScript

This repository contains a simple example of implementing lazy loading in a TypeScript web application without using any frameworks. The project demonstrates how to dynamically import a module when a button is clicked.

## Project Structure

lazy-loading-example/
├── dist/
│ ├── index.html
│ ├── app.js
│ └── lazyModule.js
├── src/
│ ├── index.html
│ ├── app.ts
│ └── lazyModule.ts
├── tsconfig.json
└── package.json


## Prerequisites

- [Node.js](https://nodejs.org/) (which includes npm)
- A static file server (e.g., `http-server`)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/lazy-loading-example.git
   cd lazy-loading-example

2. Install the TypeScript compiler:

    ```bash
    npm install typescript --save-dev

3. Initialize TypeScript:

    ```bash
    npx tsc --init

4. Install a static file server (if not already installed):

    ```bash
    npm install -g http-server

5. Compile the TypeScript files:
    ```bash
    npx tsc

6. Serve the application:
    ```bash
    http-server dist

7. Open your browser and navigate to `http://localhost:8080 `

