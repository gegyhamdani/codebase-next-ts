## ESLint

This project uses several eslint rules that can be found in the `.eslintrc.json` file.<br/>

**Try not** to disable eslint rules (either for 1 line or 1 file). If it is absolutely necessary to disable one or more eslint rules, provide an explanation/details on why eslint is disabled on that line of code or file using a comment.

## Folder Structure

| Folder                  | Description                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| /public                 | This folder contains assets that will be displayed on the website.                                                                                                             |
| /src/pages              | This folder contains components that will be considered as routes on the website.                                                                                              |
| /src/components/commons | This folder contains reusable components that can be used in multiple pages.                                                                                                   |
| /src/components/layouts | This folder contains layout components, where the components are reused across pages (such as footer, header, etc.).                                                           |
| /src/components/pages   | This folder contains components for each page/route. The component, logic, and styling for a page/route are stored in the components in this folder.                           |
| /src/components/ui      | This folder contains base components. These base components are the smallest components that cannot be further broken down, and they are reusable in various other components. |
| /src/constants          | This folder contains files for storing constant variables that can be used in multiple components.                                                                             |
| /src/hooks              | This folder contains custom hooks that can be used in various components.                                                                                                      |
| /src/services           | This folder contains API declarations and lists services for an endpoint.                                                                                                      |
| /src/styles             | This folder contains CSS and/or SCSS files with global classes. The classes in these files can be used in various components.                                                  |
| /src/utils              | This folder contains reusable functions/utilities that can be used in various components or custom hooks.                                                                      |

## File Naming

- .tsx files are named using **PascalCase**.
- Media files (.png, .jpg, etc.) are named using **kebab-case**.
- .ts files in services, utils, constants, etc., are named using **camelCase**, except for supporting .ts files in component folders (besides custom hooks), which can use **PascalCase**.

## Code Styling

- Variables (except constants) are written in **camelCase**.<br/>
- Constant variables are written in **PascalCase**.<br/>
- Functions/Methods are declared using **camelCase**.<br/>
- Components are declared using **PascalCase**.<br/>
- Custom hooks are declared using **camelCase**.<br/>

## SCSS Modules and BEM Methodology

We use **SCSS modules** in this project to keep styles scoped to the specific component they are defined in. This ensures that styles are not globally applied, reducing the chance of unintended style overrides across components.

In addition to SCSS modules, we follow the **BEM (Block, Element, Modifier)** methodology to organize our CSS class names. BEM ensures that our CSS remains structured, scalable, and easy to maintain, especially as the project grows.

For example, a component named `Button` would follow this structure:

```scss
// Button.modules.scss
.button {
  &__icon {
    // Styling for the icon within the button
  }

  &--primary {
    // Styling for the primary variant of the button
  }
}
```

- Block: The main container element (e.g., button).
- Element: A part of the block (e.g., \_\_icon).
- Modifier: A variant or state of the block (e.g., --primary).

## Types vs Interfaces

We prefer using types over interfaces in this project for several reasons:

1. Flexibility: type offers greater flexibility for defining various types beyond just object shapes, including function signatures, union types, and more. This versatility makes it suitable for handling the diverse typing needs within a React application.

2. Props and State: While both type and interface can be used for props and state, type is often preferred due to its conciseness and ability to express more complex prop type relationships (e.g., optional props, readonly props).

3. Refs: type is generally the better choice for defining ref types, as interfaces don't work well with the MutableRefObject type often used for refs.

4. Functions: type is the clear winner for defining function types, offering a straightforward way to specify parameter types and return types.

5. Consistency: While interfaces have their place (especially when inheritance is needed), favoring type promotes consistency across your codebase, making it easier to reason about and maintain.

However, interfaces are still useful when working with extensive use of interfaces or anticipate needing inheritance for your type definitions, so there might be scenarios where interfaces are more appropriate. But in general, we favor types for their flexibility and ability to handle a wider range of use cases.

## Support Files

In a component, we can add 4 supporting files that help the component manage its logic/styling.

- **(componentname).modules.scss**<br/>
  For declaring classes that are only used by one component.

- **(componentname).constants.ts**<br/>
  For declaring constants that are only used by one component. Always try to create constant variables for strings/numbers to avoid `hardcode` or `magic numbers`. If a constant variable is only used in one component, store it in this file, but if the constant is used across multiple components, it can be stored in the `src/constants/` folder.

- **(componentname).helpers.ts**<br/>
  For declaring functions/logic that are only used by one component. Always split the logic from a component, and use this helpers file for declaring functions/logic that are heavy and will be used by the component.

- **use(componentname).tsx**<br/>
  For creating custom hooks that are only used by one component. Custom hooks are used to separate the logic from the component (fetching, listeners, data updates/manipulation, etc.).
