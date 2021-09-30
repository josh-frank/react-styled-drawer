# react-styled-drawer

A drawer component for the React/Next family with styled-components.

## Use

```
return (
    <Drawer position={} height={} width={} offset={} }> ... </Drawer>
);
```

## API

|props|type/values|description|
|-|-|-|
|**`position`**|string|Must be one of `[ "top", "bottom", "left", "right" ]`|
|**`height`**|string/integer|Use any valid DOM size measurement like `%`, `rem`, `vh/vw`, etc.|
|**`width`**|”|”|
|**`offset`**|object|Must be a single key/value pair where the key is one of `[ "top", "bottom", "left", "right" ]`|
