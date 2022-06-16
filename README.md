# JSX Lite

| Using JSX without React.js

[![https://nodei.co/npm/jsx-lite.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/jsx-lite.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/jsx-lite)

## Installation

```bash
npm install -D @jsx-lite/jsx-runtime
# or
yarn add -D @jsx-lite/jsx-runtime
# or
pnpm add -D @jsx-lite/jsx-runtime
```

Open `babel.config.js` or `.babelrc` and add the following line:

`.babelrc`:

```json
...
"presets": [
    [
        "@babel/preset-react", {
            "runtime": "automatic",
            "importSource": "@jsx-lite"
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
          importSource: '@jsx-lite',
        },
    ],
]

```

## Usage

### Render to DOM

```js
import { render } from "@jsx-lite/jsx-runtime";

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
