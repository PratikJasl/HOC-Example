# HIGHER ORDER COMPONENTS (HOC)
•	HOC are functions that take a component and return a new component with additional props or functionality.

**Why do we need Higher Order Components?**
1)	Code Reusability: HOCs help in encapsulating common functionality that can be reused across multiple components. This promotes code reusability and maintains a DRY (Don't Repeat Yourself) codebase.
2)	Separation of Concerns: They allow for better separation of concerns by keeping the core functionality of components focused on presentation while moving other concerns to separate HOCs.

**Where do we use Higher Order Components?**
1)	Authentication: HOCs can be used to protect routes by checking if a user is authenticated before rendering the component.
2)	Data Fetching: They can be used to fetch data from an API and pass it down as props to components.
3)	Conditional Rendering: HOCs can conditionally render components based on certain criteria like user permissions or feature flags.

**How do we use Higher Order Components?**
Example: Let’s say we have 2 component, where we need to use Counters, instead of writing the same code in both components we can create an HOC as shown below
![image](https://github.com/PratikJasl/HOC-Example/assets/129071772/43b757d4-671b-4231-af7e-eb15228ee72f)

**Creating an HOC:**
•	An HOC is created like any other react function, but it accepts a component as an argument and returns the component with new props.
•	In the above example, we created an HOC function which accepts the “OldComponet” as an argument, and along with that any extra argument in our case “increment”.
•	The HOC then returns a function which in-turns returns the Old-Component with its existing props and new props to it.
**Using HOC:**
•	To use an HOC we import the HOC in the desired component and wrap the old component with the HOC.
•	Then we can access the new props provided by the HOC in our components.
• Below are two ways to use HOC in components

![image](https://github.com/PratikJasl/HOC-Example/assets/129071772/cf6023f5-e578-48e3-a7ca-2710b9a71788)

![image](https://github.com/PratikJasl/HOC-Example/assets/129071772/b7808f9e-ddad-4569-aebb-5287ba5fae7d)
