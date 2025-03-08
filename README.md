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

## Routing 

- Next.js has a file-system based routing system.

- URLs you can access in your browser are determined by how you organize your files and folders in your code.

### Routing conventions : 

1. All routes must live inside the app folder.
2. Route files must ne named either page.js or page.tsx
3. Each folder represents a segment of the URL path.

**NOTE :** When these conventions are followed, the file automatically becomes available as a route.

## File based routing : 

**Scenario 1 :**
<img src="./assets/Pic-1.png" />

- `page.tsx` file inside the app folder automatically maps to your site's URL.

- If you deleted `layout.tsx` file, the next.js will automatically re-create that file when you first access the root route.

**Scenario 2 :**
<img src="./assets/Pic-2.png" />

- Create 2 folders named `about` and `profile` inside app directory.

- Inside those files create a file named `page.tsx` and export a default function(component).

- The routes are directly tied to their folder names within the app directory.

**Scenario 3 :** Nested Routes
<img src="./assets/Pic-3.png" />

- Inside app directory create another folder named `blog`.

- Create a `page.tsx` file.

- Then create 2 new folders named `first` and `second` inside the `blog` folder.

- Create `page.tsx` inside both `first` and `second` folder.

Solution : 
<img src="./assets/Pic-4.png" />

**NOTE :** Next.js mirrors your folder structure in your URL's automatically.

**Scenario 4 :** Dynamic Routes
<img src="./assets/Pic-5.png" />

- Create a folder named `products` and a `page.tsx` file inside it.

- Create anther folder named `productId` wrapped within the square brackets, inside the `products` folder.

- Inside the `[productId]` folder, create a `page.tsx`, where you'll receive whatever is passed in the URL after the `http://localhost:3000/products`

Solution : 
<img src="./assets/Pic-6.png" />

**Scenario 5 :** Nested Dynamic Routes
<img src="./assets/Pic-7.png" />

- Inside the `[productId]` folder, create another folder named `reviews`.

- Inside `reviews` folder create another dynamic folder named as `[reviewId]`.

- Inside `[reviewId]` dynamic folder, create a `page.tsx` file.

Solution : 
<img src="./assets/Pic-8.png" />

**Scenario 6 :** Catch-all Routes
<img src="./assets/Pic-9.png" />

- Create a folder named `docs` inside the app dirtectory.

- Inside `docs` folder, create a "catch-all" route, by creating the folder like the following : `[...slug]`

- The 3 dots represents the catch-all routes.

- Inside `[..slug]` folder, create a `page.tsx` file.

Solution : 
<img src="./assets/Pic-10.png" />

### Page Not Found : 

- Create a file named `not-found.tsx` inside the app directory.

- Now you can create your own custom "404 Page not found".

- This page can be triggered programatically as well.

**NOTE :** 

1. The file name must be exactly `not-found.tsx`.

2. "NotFound" component will not accept any props.

### File Colocation :

- Create a folder named `dashboard` inside the app directory, and create a `line-chart.tsx` file.

- The route `http://loacalhost:3000/dashboard` won't work. You must only create `page.tsx` file for this route to work.

- You can safely colocate project files inside route segments in the app directory without worrying about them accidentally becoming routes themselves.

**NOTE :** The component without the default exports, will also won't work.

### Private folders : 

- Helps us to keep the project super organized.

- A way to tell Next.js,
"Hey, this folder is just for internal stuff - don't include it in the routing system."

- The folder and all its subfolders are excluded from routing.

- Add an underscore at the start of the folder name

**Benifits of Private Folder :**

- Keeping your UI logic separate from routing logic.

- Having a consistent way to organize internal files in your project.

- Making it easier to group related files in your code editor.

- Avoiding potential naming conflicts with future Next.js file naming conventions.

### Route Groups : 

- Let's us logically organize our routes and project files without impacting the URL structure.

- Let's implement authentication routes : 

    - Register
    - Login
    - Forgot password

**Solution :**

- Create a folder named `(auth)`.
- Move the `register`, `login` and `forgot-password` folders inside the `(auth)` folder.

**NOTE :** The auth folder must be wrapped within the parenthesis.