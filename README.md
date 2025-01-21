# next-action-guard

**next-action-guard** is a library designed to ensure type-safe server actions in Next.js 13+ applications. It allows you to easily control and validate server-side operations, reducing type mismatch errors and improving code quality and maintainability.

## Features

- 🌟 **Type-safe** – Guarantees type correctness for both input and output of server actions.
- 🔒 **Access guards** – Define rules that must be met before an action is executed.
- 🚀 **Easy integration** – Fully compatible with the modern server actions model in Next.js.
- 📦 **Lightweight** – Simple and efficient implementation with minimal overhead.

```typescript
import { createActionGuard } from 'next-action-guard';

export const actionGuard = createActionGuard()
    .schema(
        z.object({
            name: z.string().min(3),
        }),
    )
    .action(async ({ data, metadata }) => {
        // create user

        return {
            success: true,
        };
    });
```

```tsx
import { useAction } from 'next-action-guard';

export const Form = ({}) => {
    const {execute, isPending, result} = useAction(exampleServerAction);
    
    return (
        <form
            onSubmit={execute}
            className="flex flex-col gap-4 w-[300px]"
        >
            ...
        </form>
    );
}
```
