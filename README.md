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
import BaseButton from 'BaseButton'
import extendable from "extendable-style";

// 
export default extendable(BaseTitle, () => ({
  color: "#FF0000",
  "font-size": "0.875rem",
  "font-weight": "200",
}));
```