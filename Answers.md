# Answers

1.  What is React JS and what problems does it try and solve?
  - React JS is an interactive UI library that is JavaScript like HTML and the problems it tries to solve is the use of the virtual DOM for faster development of the UI app, Reusability of components throughout the entire applications, which can help save time in the development process, and uses of real and fully featured programming language that renders view. 

1.  What does it mean to _think_ in react?
  - First you must break down the UI into components to understand the parent/child relationship, then build a static app with no interactivity, identify where to use state then figure out where state should live, decide how the hierarchy will function for props and state to flow down accordingly.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
  - Class component requires you to extend from React.Component and create render to return a react element, class components give you more benefits than a functional component. Stateful components are class components but with state being initialized in the constructor.

  - Presentational components are primarily concerned with how things look, rarely have state properties. Functional component accepts props as the argument and is just a plain JavaScript function.

1.  Describe state.
  - State is managed by the component and can be changed by the state.

1.  Describe props.
  - Props is passsed from a parent component to the child component, props are readonly.