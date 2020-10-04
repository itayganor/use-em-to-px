use-em-to-px
===

![npm version](https://img.shields.io/npm/v/use-em-to-px)

Not your regular `em` to `px` converter.

---

## Install
```shell script
npm install use-em-to-px
```

## Usage
```typescript jsx
import useEmToPx from 'use-em-to-px';


function Foo() {
    const [ref, emToPx] = useEmToPx<HTMLDivElement>();

    return <div ref={ref}>
        In this div, 1em is equal to {emToPx(1)}.
    </div>;
}
```

In CSS, `em` sizes are calculated relative to the current font size. The hook returns a reference
To measure font size by, and a function that calculates the exact size in `px`.

Uses `16px` as a fallback.
