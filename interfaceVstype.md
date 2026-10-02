# Interface vs Type in TypeScript

Both `interface` and `type` can define the shape of an object, but they have some important differences.

## Direct Comparison

| Feature | `interface` | `type` |
| Main purpose | Define object structures/contracts | Define objects and other types |
| Object types | ✅ Yes | ✅ Yes |
| Extend | `extends` | Intersection `&` |
| Declaration merging | ✅ Yes | ❌ No |
| Union types | ❌ Cannot directly define a union | ✅ Yes |
| Primitive aliases | ❌ No | ✅ Yes |
| Tuples | Not directly | ✅ Yes |
| Conditional/Mapped types | Limited directly | ✅ Yes |


## 1. Basic Example
### Interface
```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Ganesh"
};
```

### Type
```ts
type User = {
  id: number;
  name: string;
};
```
For a simple object structure, both work similarly.

# 2. Extending Types
## Interface → `extends`
```ts
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
const bear: Bear = {
  name: "Brown Bear",
  honey: true
};
```

## Type → Intersection `&`
```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

### Easy to Remember
```text
interface → extends

type → &
```

# 3. Declaration Merging
One important feature of `interface` is **declaration merging**.
If interfaces with the same name are declared in the same scope, TypeScript can merge their compatible properties.

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}

const user: User = {
  id: 1,
  name: "Ganesh"
};
```

The final `User` effectively contains:

```ts
interface User {
  id: number;
  name: string;
}
```

## Type Does Not Support Declaration Merging

```ts
type User = {
  id: number;
};

type User = {
  name: string;
};

// ❌ Duplicate identifier 'User'
```

### Learning Point
> `interface` supports declaration merging, while `type` aliases do not.

# 4. Type Is More Flexible
A `type` alias can represent more than just object structures.

## Primitive Alias
```ts
type ID = string;
```
## Union
```ts
type ID = string | number;
```

Another common example:
```ts
type ConnectionState =
  | "connecting"
  | "connected"
  | "disconnected";
```
This is especially useful when only specific values should be accepted.

```ts
let status: ConnectionState;
status = "connected"; // ✅
status = "failed";    // ❌
```

# 5. Tuples
`type` can directly define tuples.
```ts
type Point2D = [number, number];
const location: Point2D = [10, 20];
```

# 6. Class Contracts
Interfaces are commonly used to define contracts that classes implement.

```ts
interface Employee {
  id: number;
  name: string;
  getDetails(): string;
}

class Developer implements Employee {
  constructor(
    public id: number,
    public name: string
  ) {}
  getDetails(): string {
    return `${this.id} - ${this.name}`;
  }
}
```

# 7. When Should I Use Interface?
Prefer `interface` when:
- Defining object models
- Defining API contracts
- Defining class contracts
- You need `extends`
- You intentionally need declaration merging
- You expect an object contract to be extended

Example:
```ts
interface ApiResponse {
  status: number;
  message: string;
}
interface UserResponse extends ApiResponse {
  data: User[];
}
```

# 8. When Should I Use Type?
Prefer `type` when you need:
- Union types
- Intersection types
- Primitive aliases
- Tuples
- Literal types
- Conditional types
- Mapped types
- More complex type transformations

Example:
```ts
type Status = "loading" | "success" | "error";
```

Intersection:
```ts
type User = {
  name: string;
};

type Admin = {
  permissions: string[];
};

type AdminUser = User & Admin;
```

# Angular Real-World Example
For straightforward API/domain models, an interface is often clear:
```ts
interface User {
  id: number;
  name: string;
  email: string;
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>("/api/users");
}
```

For application states, a union type can be very useful:
```ts
type RequestStatus =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

For combining existing types:

```ts
type UserWithPermissions = User & {
  permissions: string[];
};
```



#  Answer

A simple senior-level answer:

> Both `interface` and `type` can define object structures.  
> I generally use `interface` for extendable object contracts and `type` when I need unions, intersections, tuples, literal types, or more advanced type transformations.  
> One important difference is that interfaces support declaration merging, while type aliases do not.


# Quick Revision

```text
interface
   ↓
Object contracts
extends
implements
declaration merging


type
   ↓
Objects
Unions |
Intersections &
Tuples
Primitives
Literal types
Advanced type transformations
```

## Easy Rule
**Object contract → `interface` is often a good choice**
**Union / tuple / advanced type composition → `type`**
