### package.json

#### package.json has all the packages list that need to run the project

### index.js

#### index.js is the base file for the app it can run the app

### App.js

#### App.js is the code for the app that is being rendered by the index.js

### setState(run(what to change), callback(what to do with the change))

#### setState will update the state object with the new one

#### if you want to render something from the API/object/array you can use map() to loop over the array and create elements

#### you should add key{unique id} attribute to HTML elements

<br/>

### Non-SPA = Single Page Application

#### ztm.io => request HTML/CSS/JS files from the server

#### ztm.io/react => request again for the new HTML/CSS/JS files

### SPA = Single Page Application

#### ztm.io => request for HTML CSS JS Files

#### ztm.io/react => makes up its own HTML CSS Files based on the react code

### Re-Rendering in React

#### - on initialization

#### - on state change

#### - on props change

### Rendering / Re-Rendering

#### Mounting DOM happens when `constructor` runs -> `renders` runs and `react render the actual DOM` -> `componentDidMount()` can be called.

#### Updating DOM happens when `New props`, `setState()`, `forceUpdate()` runs ->`renders`runs and `react render the actual DOM` -> `componentDidUpdate()` can be called.

#### Unmounting happens when there is no use of a certain component `componentWillMount()` can be called.

### Pure function, unpure functions and side effects

#### Pure functions should return the same output for the same inputs no matter how many times it runs

#### `purefunc = (a, b) => a + b;`=> this will always return same output for same inputs

#### Impure functions rely on variables outside of the function.

#### `const c = 1`

#### `impurefunc = (a, b) => a + b + c;`=> this may change the output depending on the var `c`

#### if a function changes the value of any variable outside its scope its called `side effect`.
