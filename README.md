# JSX Mini

| Using JSX without React.js

[![https://nodei.co/npm/jsx-mini.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/jsx-mini.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/jsx-mini)

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
            ref={(el) => {
                if (el) {
                    el.addEventListener('click', () => {
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
