# Next-Js by Codevolution : Part-1

### Topics Covered : 

- Introduction to Next.js
- Hello World
- Project Structure
- Before We Start
- Routing
- Nested Routes
- Dynamic Routes
- Nested Dynamic Routes
- Catch-all Segments
- Not Found Page
- File Colocation
- Private Folders
- Route Groups
- Layouts
- Nested Layouts
- Multiple Root Layouts
- Routing Metadata
- title Metadata

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

**NOTE :** The auth folder must be wrapped within the parenthesis. Now the `/auth` in the url will be ignored.

### Layouts : 

- Pages are route-specific UI components.

- A layout is UI that is shared between multiple pages in your app.

<img src="./assets/Pic-11.png" /> 

**Creating a layout** : 

1. Default export a React component from layout.js or layout.tsx file.
2. That component takes a children prop, which Next.js will populate with your page content.

**Working of Layouts :**

1. 
<img src="./assets/Pic-12.png" />

2. 
<img src="./assets/Pic-13.png" />

3. 
<img src="./assets/Pic-14.png" />

4. 
<img src="./assets/Pic-15.png" />

### Nested layouts : 

<img src="./assets/Pic-16.png" />

<img src="./assets/Pic-17.png" />

### Multiple Root Layouts : 

**Route group uses :**

- Organize our project structure without affecting URL's.

- Apply layouts selectively to specific parts of our app.

**Implementation :** Remove the header for the `/register`, `/login` and `/forgot-password` routes.

1. create a route group called `(marketing)`, inside which create 2 folders named `customers` and `revenue`.

2. create `page.tsx` file inside both `customers` and `revenue` folder.

3. Now move the `layout.tsx` file from the app/root directory into the `(marketing)` route groups folder and rename the default export function component to "MarketingLayout".

4. Create another `layout.tsx` inside the `(auth)` route group folder and rename the default export function component to "AuthLayout".

5. Now remove the header from the `layout.tsx` file which is present inside the `(auth)` route group folder.

6. Now if you open the `http://localhost:3000`, you will see an error saying "page.tsx doesn't have a root layout".

7. To solve this problem, move the `page.tsx` from the app/root directory into the `(marketing)` route group.

### Routing Metadata : 

- The Metadata API in Next.js is a powerful feature that lets us define metadata for each page.

- Metadata ensures our content looks great when it's shared or indexed by search engines.

- Two ways to handle metadata in layout.tsx or page.tsx files:

    1. Export a `static metadata` object.
    2. Export a dynamic `generateMetadata` function.

**NOTE :** 

1. You cannot use both `static metadata` object and dynamic `generateMetadata` function in the same route segment.

2. Both static and dynamic metadata won't work on the pages marked as "use client".

**Solution to NOTE 2 :**

- Problem : 
```js
// counter/page.tsx : 

"use client";

import { useState } from "react";

export const metadata = {
    title: "Counter"
}

export default function page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-700 p-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}

// The above code will throw error because, metadata object cannot be exported out of a client component.
```

- Solution : Move the client side logic into a seperate component.

```js
// counter/counter.tsx :

"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-700 p-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}
```

```js
// counter/page.tsx : 

import { Counter } from "./counter";

export const metadata = {
  title: "Counter",
};

export default function page() {
  return (
    <div>
      <Counter />
    </div>
  );
}
```

**Metadata rules :**

- Both `layout.tsx` and `page.tsx` can export metadata. Layout metadata applies to all its pages, while page metadata is specific to that page.

- Metadata follows a top-down order, starting from the root level.

- When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.

### Title Metadata : 

- The title field's primary purpose is to define document title.

- It can be either a string or an object.

```js
export const metadata: Metadata = {
  // title: "Next.js",
  title: {
    default: "", // Acts as fallback for any child routes that don't specify any title
    template: "", // When you want to add prefix or suffix to your title. This property applies to child routes. 
    absolute: "" // Used when you want to break free from the template pattern set by parent segments. title.absolute overrides the parents segment title.
  },
  description: "Generated by create next app",
};
```