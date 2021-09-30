# react-styled-drawer

A drawer component for the React/Next family with `styled-components`.

## Use

```
import Drawer from "react-styled-drawer";
...
return (
    <Drawer
        position="..."
        backgroundColor="..."
        height="..."
        width="..."
        offset={ ... }
    >
        ...
    </Drawer>
);
```

## API

<table>
  <thead>
    <tr>
      <th>props</th>
      <th>type</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>position</code></td>
      <td>string</td>
      <td>Must be one of <code>[ "top", "bottom", "left", "right" ]</code></td>
    </tr>
    <tr>
      <td><code>backgroundColor</code></td>
      <td>string</td>
      <td>Must be a valid CSS color like <code>lightblue</code> or <code>#eee</code> or <code>rgba( 255, 255, 0, 0.5 )</code></td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td rowspan="2">string/integer</td>
      <td rowspan="2">Use any valid DOM size measurement like <code>%</code>, <code>rem</code>, <code>vh</code>/<code>vw</code>, etc.</td>
    </tr>
    <tr>
      <td><code>width</code></td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>object</td>
      <td>
        <ul>
            <li>Must be a single key/value pair</li>
            <li>Key must be one of <code>[ "top", "bottom", "left", "right" ]</code></li>
            <li>Value must be a valid DOM size measurement as for <code>height</code>/<code>width</code></li>
            <li><span style="color: green">Correct: <code>{ top: "5vh" }</code></span<</li>
            <li><span style="color: red">Incorrect: <code>{ left: "10px", offsetTop: "5vh" }</code></span></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
