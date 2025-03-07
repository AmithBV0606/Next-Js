# Next-Js by Codevolution

### What is Next.js ?

- Next.js is a React framework for building full-stack web applications.

### React 

- React alone isn't feasible to create a fully-featured application ready for production.

- React is a library for building user interfaces.

- You need to make decisions about other features such as routing, data fetcing and more.

### Next.js

- It uses React for building user interfaces.

- Provides additional features that enable you to build production-ready applications.

- These features includes routing, optimized rendering, data fetching, bundling, compiling and more.

- You don't need to install additional packages as Next.js provides everything you need.

### Why learn Next.js ?

- Next.js simplifies the process of building production-ready web applications.

1. Routing (File based)
2. API routes
3. Rendering (SSR and CSR)
4. Data fetching (asynchronous components)
5. Styling (Built in support for TailwindCss)
6. Optimization (Image, Link tags, fonts)
7. Dev and prod build system

### `package.json` file breakdown : 

- `dev`: "next dev" : For running the project in development mode. 
- `build`: "next build" : For production builds.
- `start`: "next start" : For running the production server.
- `lint`: "next lint" : For setting up the next.js's built-in eslint configuration.

### Other files : 

- `next.config.ts` : For next.js configuration.
- `tsconfig.json` : For TypeScript configuration.
- `eslint.config.mjs` : For eslint configuration.
- `postcss.config.mjs` : For tailwindcss configuration.

## Before starting with NextJs

### React Server Components(RSC) :

- React Server Component is a new architecture that was introduced by the React team and quickly adopted by Next.js

- This architecture introduces a new approach to creating React components by dividing them into 2 distinct types : 

    - Server Components
    - Client Components

### Server Components : 

- By default, Next.js treats all components as Server components.

- These components can perform server-side tasks like reading files or fetching data directly from a database.

- The trade-off is that they can't use React hooks or handle user interactions.

### Client Components :

- To create a Client component, you'll need to add the "use client" directive at the top of your component file.

- While Client components can't perform server-side tasks like reading files, they can use hooks and handle user interactions.

- Client components are the traditional React components you're already familiar with from previous versions of React.