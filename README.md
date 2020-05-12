# extendable-style

## usage

Normally, 

```typescript
import React from "react";

interface BaseTitleProps {
  label: string;
  className?: string;
}

// required className property.
const BaseTitle: React.FC<BaseTitleProps> = ({ label, className }) => {
  return <h1 className={className}>{label}</h1>;
};
```


```typescript
// RedTitle.ts
import BaseTitle from 'BaseBTitle'
import extendable from "extendable-style";

// change label color
export default extendable(BaseTitle, () => ({
  color: "#FF0000",
}));
```

```typescript
import React from "react";
import RedTitle from 'RedTitle'
import BaseTitle from 'BaseTitle'

const App: React.FC = () => {
    return (
    <>
        <RedTitle lable="Red title" />
        <BaseTitle label="Base title" />
    </>
    )
}
```