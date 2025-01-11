export interface Blogs {
    id: number;
    title: string;
    author: string;
    date: string;
    content: string;
}

export const blogs: Blogs[] = [
    {
        id: 1,
        title: "Mastering React Hooks",
        author: "Emily Carter",
        date: "2024-10-10",
        content: "Mastering React HoReact Hooks, introduced in React 16.8, simplify functional components by enabling state management and side effectswithout the need for class componenKey Hooks to KnowuseState: Manages state in functional components.useEffect: Handles side effects like fetching data or updating the DOM.useContext: Simplifies consuming context without Consumer.useReducer: Manages complex state logic with multiple actions.useMemo & useCallback: Optimize performance by memoizing values and functions.Best PracticesAlways call hooks at the top level of components.Follow dependency rules in useEffect to avoid unexpected behavior.Create custom hooks for reusable logic.Mastering these hooks will help you build cleaner, scalable, and modern React applications",
    },
    {
        id: 2,
        title: "Exploring CSS Grid Layout",
        author: "John Doe",
        date: "2024-09-15",
        content: "Exploring CSS Grid Layout CSS: Grid Layout is a powerful layout system designed to create responsive and flexible web designs. It allows developer to define rows and columns explicitly, making complex layouts easier to manage. Key Concepts of CSS Gri Grid Container: The parent element with display: grid or display: inline-grid Grid Items: The direct children of the grid container Grid Tracks: Rows and columns defined with properties like grid-template-rows and grid-template-columns Grid Lines: The dividing lines between rows and columns, useful for item placement Common CSS Grid Propertie grid-template-rows & grid-template-columns: Define the size and number of rows/columns gap: Adds spacing between grid items grid-area: Assigns an item to specific rows and columns.justify-items & align-items: Control alignment of items within cells..Why Use CSS Grid? Responsive Design: Easily adapt layouts for different screen sizes. Precision: Explicit control over rows, columns, and item placement. Flexibility: Combine with other layout methods like Flexbox for advanced designs. CSS Grid is a game-changer for modern web design, offering both simplicity and power for creating intuitive layouts.",
    },
    {
        id: 3,
        title: "Building RESTful APIs with Node.js",
        author: "Emily Davis",
        date: "2024-08-22",
        content: "Building RESTful APIs with Node.js Node.js, with its non-blocking I/O and vast ecosystem, is ideal for building efficient RESTful APIs. RESTful APIs enabl communication between clients and servers using HTTP methods like GET, POST, PUT, and DELETE. Key Steps to Build a RESTful AP Set Up Node.js: Initialize your project with npm and install required packages like express Define Routes: Use express to create routes for each endpoint, e.g., app.get(users) Handle Data: Use middleware like body-parser or express.json() to parse request data Connect to a Database: Integrate databases like MongoDB or MySQL for data storage Implement Error Handling: Return proper status codes and error message Node.js makes it simple to build scalable and maintainable RESTful APIs for modern web applications. ",
    },
    {
        id: 4,
        title: "Building Progressive Web Apps",
        author: "Evelyn White",
        date: "2023-12-15",
        content: "Building Progressive Web Apps (PWAs) Progressive Web Apps (PWAs) combine the best of web and mobile apps, offering fast, reliable, and engaging experience directly in a browser Key Features of PWA Offline Access: Enabled by service workers to cache assets and data Installability: Users can add PWAs to their home screens like native apps Responsive Design: Seamlessly adapt to various devices and screen sizes Steps to Build a PW Responsive Design: Ensure your app works across devices Service Workers: Use them for caching assets and enabling offline functionality Manifest File: Define metadata like name, icons, and start URL for installability..",
    },

    {
        id: 5,
        title: "Next.js: Server-Side Rendering Made Simple",
        author: "Emma Lewis",
        date: "2023-08-05",
        content: "Next.js: Server-Side Rendering Made Simple Next.js simplifies server-side rendering (SSR), enabling pages to be rendered on the server and sent as fully formed HTM to the browser. This improves performance, SEO, and user experience Key Features of SSR in Next.j etServerSideProps: Fetch data at request time for dynamic content SEO Optimization: Pre-rendered HTML ensures better search engine indexing Performance: Reduces client-side JavaScript workload."
    },
    {
        id: 6,
        title: "Best Practices for Writing Clean Code",
        author: "Liam Young",
        date: "2023-04-02",
        content: "Best Practices for Writing Clean Code Writing clean code improves maintainability, readability, and collaboration. Here are key best practices to follow 1. Meaningful Namin Use descriptive variable, function, and class names that convey their purpose. Avoid single-letter names except for loo counters 2. Keep Functions Smal Functions should do one thing and do it well. Break down large functions into smaller, reusable ones 3. Avoid Magic Number Use named constants instead of hardcoded values to improve clarity 4. Write Comments Sparingl Good code should be self-explanatory. Use comments to explain why, not what, the code does . Consistent Formattin Use consistent indentation, spacing, and line breaks. Consider using tools like Prettier for automatic formatting . Handle Errors Gracefull Implement proper error handling with try-catch blocks and meaningful error messages. 7. Refactor Regularl Periodically review and improve your codebase to keep it efficient, organized, and up-to-date Clean code makes projects easier to scale, debug, and collaborate on—essential for long-term success."
    },
 
];

