# HIGHER ORDER COMPONENTS (HOC)
•	HOC are functions that take a component and return a new component with additional props or functionality.

**Why do we need Higher Order Components?**
1)	Code Reusability: HOCs help in encapsulating common functionality that can be reused across multiple components. This promotes code reusability and maintains a DRY (Don't Repeat Yourself) codebase.
2)	Separation of Concerns: They allow for better separation of concerns by keeping the core functionality of components focused on presentation while moving other concerns to separate HOCs.

**Where do we use Higher Order Components?**
1)	Authentication: HOCs can be used to protect routes by checking if a user is authenticated before rendering the component.
2)	Data Fetching: They can be used to fetch data from an API and pass it down as props to components.
3)	Conditional Rendering: HOCs can conditionally render components based on certain criteria like user permissions or feature flags.


