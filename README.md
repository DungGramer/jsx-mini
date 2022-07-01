# JSX Mini

| Using JSX without React.js  
[![install size](https://packagephobia.com/badge?p=jsx-mini)](https://packagephobia.com/result?p=jsx-mini)

## Installation

```bash
npm install -D jsx-mini
# or
yarn add -D jsx-mini
# or
pnpm add -D jsx-mini
```

## Config

Open `babel.config.js` or `.babelrc` and add the following line:

`.babelrc`:

```json
...
"presets": [
    [
        "@babel/preset-react", {
            "runtime": "automatic",
            "importSource": "jsx-mini"
        }
    ]
]
...
```

`babel.config.js`:

```js
...
presets: [
     [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          importSource: 'jsx-mini',
        },
    ],
]
...
```

### JSX Comments
If you don’t want to configure Babel, a JSX pragma can be used to transform a single file.  
Import the comments before the JSX code:
```js
/** @jsxImportSource jsx-mini */
```

## Usage

### Render to DOM

```js
import { render } from "jsx-mini";

const App = <h1>Hello, world!</h1>;
render(<App />, document.getElementById("root"));
```

### Query Selector

```js
    const Button = () => (
        <button
            ref={event => {
                if (event) {
                    event.addEventListener('click', () => {
                        alert('Hello, world!');
                    });
                }
            }}
        >Print</button>;
    )
```

### Fragment
```js
    const Badge = ({content}) => (
        <>
            <span>{content}</span>
        </>
    );
```

### Async Rendering
```js
    const TodoItem = async ({id}) => {
        let api = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        let todo = await api.json();

        return (
            <li>
                <span>{todo.title}</span>
                <input type="checkbox" checked={todo.completed} />
            </li>
        );
    }
```

### Children
```js
    const Wrapper = ({children}) => (
        <div>
            {children}
        </div>
    );

    const App = () => (
        <Wrapper>
            <Badge content="Hello, world!" />
        </Wrapper>
    );
```

### Set attribute
```js
    const Icon = ({name, color}) => (
        <i class={`icon icon-${name}`} style={ 'color:' + color } />
    );
```
