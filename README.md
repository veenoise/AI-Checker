# AI Checker

This is an AI detector that humorously critiques the current AI detector solutions on the market.

The implementation is very simple.

```js
const ranVal = Math.random();
if (ranVal >= 0.8) {
    setVerdict({"message":"AI Generated", "percent": (ranVal * 100)});
} else {
    setVerdict({"message":"Not AI Generated", "percent": (ranVal * 100)});
}
```

The code uses randomness to decide whether the text input is AI generated or not.