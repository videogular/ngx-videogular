## ngx-videogular/core

Main module, it creates the `VgAPI` and contains some required components and directives like `VgPlayer` and `VgMedia`.

Import definition:

```typescript
...
import { VgCoreModule } from '@videogular/ngx-videogular/core';

@NgModule({
    ...
    imports: [
        ...
        VgCoreModule
    ],
    ...
})
export class AppModule {
}
```
