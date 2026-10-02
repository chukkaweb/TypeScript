# TypeScript Preparation 🚀

This repository contains my **TypeScript learning notes, coding examples, and  preparation material**, mainly focused on **Senior Angular / Front-End Developer s**.

The goal is to understand TypeScript concepts with:
- Simple explanations
- Practical examples
- Angular use cases
- Real-world scenarios
-  questions
- Tricky TypeScript questions

## 🎯 Most Important Topics
These are the highest-priority topics for  preparation:

1. Generics
2. Union & Intersection Types
3. Utility Types
4. `keyof` and `typeof`
5. `any` vs `unknown` vs `never`
6. Type Guards
7. Interface vs Type
8. Function Types
9. Readonly and `as const`
10. Generic Services in Angular

## 📚 TypeScript Basics
### Why TypeScript?
TypeScript adds **static typing** on top of JavaScript.

Benefits:
- Compile-time error detection
- Better IDE autocomplete
- Safer refactoring
- Better maintainability
- Better scalability for large applications

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);   // ✅
add(10, "20"); // ❌ Compile-time error
```

## 📦 Core Topics
### Basic Types

```ts
let name: string = "Ganesh";
let age: number = 30;
let active: boolean = true;
```

Topics:
- Type annotations
- Type inference
- `any`
- `unknown`
- `never`
- `void`

### Enums
Enums define a fixed set of named values.

```ts
enum Role {
  Admin,
  User,
  Guest
}

const userRole: Role = Role.Admin;
```

### Tuples
A tuple is an array with fixed types and order.

```ts
let user: [string, number];

user = ["Ganesh", 30]; // ✅
user = [30, "Ganesh"]; // ❌
```

### Type Assertion
Used when we know more about the type than TypeScript can infer.

```ts
const input =
  document.getElementById("username") as HTMLInputElement;

input.value = "Ganesh";
```

## 🔥 `any` vs `unknown` vs `never`
### `any`

Disables type checking.

```ts
let value: any = 10;

value = "Hello";
value.toUpperCase();
```

Use carefully because it removes TypeScript's type safety.

### `unknown`
Safer alternative to `any`.

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

The type must be checked before using the value.

### `never`

Represents something that never successfully produces a value.

```ts
function throwError(): never {
  throw new Error("Something went wrong");
}
```



## 🔗 Interface vs Type

### Interface
Commonly used to describe object structures.

```ts
interface User {
  name: string;
  age: number;
}
```

Interfaces support extension and declaration merging.

### Type

More flexible and can represent unions, intersections, tuples, primitives, and object types.

```ts
type ID = string | number;
```

###  Summary

> Interfaces are commonly useful for object contracts and support declaration merging. Type aliases are more flexible for unions, intersections, tuples, primitives, and advanced type expressions.



## 🔀 Union Types
A value can be one of multiple types.

```ts
let id: string | number;
id = 101;
id = "EMP101";
```

Example:

```ts
function printId(id: string | number) {
  console.log(id);
}
```



## 🔗 Intersection Types

Combine multiple types.

```ts
interface Person {
  name: string;
}

interface Employee {
  id: number;
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "Ganesh",
  id: 101
};
```



## 🛡️ Type Guards

Type guards safely narrow a value to a more specific type.

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
```

Important techniques:

- `typeof`
- `instanceof`
- `in`
- Custom type guards



## ♻️ Generics

Generics help create **reusable and type-safe code**.

```ts
function getValue<T>(value: T): T {
  return value;
}

getValue<string>("Ganesh");
getValue<number>(10);
```

### Generic API Response

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

const response: ApiResponse<string> = {
  data: "Ganesh",
  status: 200
};
```

### Angular Example

```ts
getData<T>(url: string): Observable<T> {
  return this.http.get<T>(url);
}
```

Usage:

```ts
this.api.getData<User[]>("/users");
```



## 🔑 `keyof`

`keyof` creates a union of the property keys of a type.

```ts
interface User {
  id: number;
  name: string;
}

type UserKeys = keyof User;
// "id" | "name"
```

Practical example:

```ts
function getValue(obj: User, key: keyof User) {
  return obj[key];
}
```



## 🔍 `typeof`

`typeof` can derive a type from an existing value.

```ts
const user = {
  name: "Ganesh",
  age: 30
};

type UserType = typeof user;
```



# 🧰 Utility Types

## Partial

Makes all properties optional.

```ts
const user: Partial<User> = {
  name: "Ganesh"
};
```

## Required

Makes all properties required.

```ts
type RequiredUser = Required<User>;
```

## Readonly

Makes properties readonly.

```ts
type ReadonlyUser = Readonly<User>;
```

## Pick

Selects specific properties.

```ts
type UserName = Pick<User, "name">;
```

## Omit

Removes selected properties.

```ts
type UserWithoutAge = Omit<User, "age">;
```

## Record

Creates an object type with defined key/value types.

```ts
type Roles = Record<string, string>;

const roles: Roles = {
  admin: "full access",
  user: "limited access"
};
```



# 🧠 Advanced TypeScript

## Mapped Types

Create types dynamically from existing types.

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```



## Conditional Types

```ts
type IsString<T> =
  T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```



## Generic Constraints

```ts
function getName<T extends { name: string }>(obj: T) {
  return obj.name;
}
```



## `infer`

Used inside conditional types to infer another type.

```ts
type MyReturnType<T> =
  T extends (...args: any[]) => infer R ? R : never;
```

For  preparation, understanding the basic purpose is usually more important than going too deep initially.



# 🧩 Function Overloading

Function overloading provides multiple call signatures for the same function.

```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return String(a) + String(b);
}
```

Usage:

```ts
add(10, 20);
add("Hello", "World");
```

###  Answer

> Function overloading allows a function to expose multiple type-safe call signatures for different input types.



# 🔐 Access Modifiers

TypeScript supports:

- `public`
- `private`
- `protected`

```ts
class Employee {
  public name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}
```



# 🧱 Declaration Merging

Interfaces with the same name can be merged.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Ganesh",
  age: 30
};
```

The resulting interface contains both properties.



## Interface Extension

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}
```



## Interface Extends vs Intersection

### Interface Extends

```ts
interface Employee extends Person {
  salary: number;
}
```

### Intersection

```ts
type Staff = Person & Employee;
```

Simple way to remember:

```text
Declaration Merging
Same interface name
        ↓
Automatically combined

Interface Extends
Parent interface
        ↓
Child interface

Intersection
Type A + Type B
        ↓
A & B
```



# 🔒 `as const`

Normal `const` prevents reassignment of the variable, but object properties can still be changed.

```ts
const user = {
  name: "Ganesh"
};

user.name = "Ram"; // ✅
```

With `as const`:

```ts
const user = {
  name: "Ganesh"
} as const;

// user.name = "Ram"; ❌
```

TypeScript treats the property as readonly and preserves its literal value.

### Angular Example

```ts
const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER"
} as const;
```

Useful for:

- Fixed values
- Configuration
- Constants
- Literal types
- Enum-like objects



# 🔗 Optional Chaining & Nullish Coalescing

```ts
const user = {
  address: {
    city: "Hyderabad"
  }
};

const city = user?.address?.city ?? "Unknown";
```

`?.` safely accesses nested properties.

`??` provides a fallback only when the value is `null` or `undefined`.



# 🧪 Important  Questions

Prepare these carefully:

1. Why TypeScript instead of JavaScript?
2. `any` vs `unknown`
3. `never` vs `void`
4. Interface vs Type
5. Union vs Intersection
6. What are Type Guards?
7. How do Generics work?
8. What are Generic Constraints?
9. Explain Utility Types
10. How does `keyof` work?
11. `keyof` vs `typeof`
12. What are Mapped Types?
13. What are Conditional Types?
14. What does `infer` do?
15. What is Function Overloading?
16. What is Declaration Merging?
17. Interface Extends vs Intersection
18. What does `readonly` do?
19. What does `as const` do?
20. Why are Generics useful with Angular `HttpClient`?



# ⚡ Tricky  Examples
### Union vs Intersection

```ts
type A = string | number;
type B = string & number;
```

`A` accepts either `string` or `number`.

`B` effectively becomes `never` because a primitive value cannot simultaneously be both `string` and `number`.

### `any` vs `unknown`

```ts
let value: any = "hello";
value.toUpperCase(); // allowed
```

Safer:

```ts
let value: unknown = "hello";

if (typeof value === "string") {
  value.toUpperCase();
}
```

### `never`

```ts
function test(): never {
  throw new Error("Error");
}
```

The function never completes normally.

# 🅰️ TypeScript in Angular
Important real-world TypeScript usage in Angular:

```text
Angular
 ├── Component models
 ├── Interfaces
 ├── API response types
 ├── HttpClient<T>
 ├── Generic services
 ├── Reactive Forms
 ├── Signals
 ├── RxJS Observable<T>
 ├── Utility types
 ├── Type guards
 └── Reusable components
```

Example:

```ts
interface User {
  id: number;
  name: string;
}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>("/api/users");
}
```

This gives:
- Compile-time type safety
- Better autocomplete
- Safer API handling
- Easier refactoring


# 📌  Preparation Priority

### 🔴 High Priority

- Types & Type Inference
- Interface vs Type
- Union & Intersection
- Type Narrowing
- Generics
- Utility Types
- Classes / OOP
- Literal Types

### 🟡 Medium Priority

- `keyof`
- `typeof`
- Indexed Access Types
- Generic Constraints
- Mapped Types
- Conditional Types
- `infer`
- Function Overloading
- `as const`

### 🟢 Awareness

- Decorators
- Namespaces
- Declaration Merging

