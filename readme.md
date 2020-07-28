## 💧 plop-helper-bradgarropy

<a href="https://npmjs.com/package/plop-helper-bradgarropy">
    <img alt="npm" src="https://img.shields.io/npm/v/plop-helper-bradgarropy.svg?style=flat-square">
</a>

<a href="https://npmjs.com/package/plop-helper-bradgarropy">
    <img alt="npm" src="https://img.shields.io/npm/dt/plop-helper-bradgarropy?style=flat-square">
</a>

_A [plop][plop] helper to generate topic icons._

### 📦 Installation

This package is installable from [npm][npm].

```bash
npm install --save-dev plop-helper-bradgarropy
```

### 🥑 Usage

Before you can use the `plop-pack`, you have to load it into the `plop` object.

```javascript
plop.load("plop-helper-bradgarropy")
```

Once loaded, you now have access the following helpers.

#### `icon`

This helper is very specific to [bradgarropy.com][bradgarropy]. It generates an icon given a topic.

**input**

```javascript
{
    topic: "coding"
}
```

**helper**

```handlebars
{{icon topic}}
```

**output**

```javascript
"💻"
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[plop]: https://plopjs.com
[npm]: https://npmjs.com
[bradgarropy]: https://bradgarropy.com
[issues]: https://github.com/bradgarropy/plop-helper-bradgarropy/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://github.com/bradgarropy/ama
