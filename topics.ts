

// 🔹 Software Engineer (SE) Questions with Answers & Code:

// 1. Why TypeScript when we already have JavaScript?

//     TypeScript adds type safety, better tooling, early error detection, and scalability for large projects.
//    let name: string = 'Ganesh';
//    name = 10; // ❌ Error: Type 'number' is not assignable to type 'string'
   

// 2. What are Enums in TypeScript?
//     Enums allow you to define named constants.
//    enum Direction {
//      Up = 1,
//      Down,
//      Left,
//      Right
//    }
//    let move: Direction = Direction.Left;
   

// 3. What is a tuple in TypeScript and how is it used?

//     A tuple allows you to express an array with fixed number of elements of known types.
//    let person: [string, number];
//    person = ['Alice', 25];
   

// 4. What is a type assertion and how is it used?
//     Used when you know more about the type than TypeScript.
//    let someValue: any = "Hello World";
//    let strLength: number = (someValue as string).length;
   

// 5. Difference between `any`, `unknown`, and `never`:
//     `any`: disables type checking.
//     `unknown`: safer alternative to any.
//     `never`: for functions that never return.
//    function error(message: string): never {
//      throw new Error(message);
//    }
   

// 6. Optional chaining (`?.`) and nullish coalescing (`??`)
//    const user = { address: { city: "Hyderabad" } };
//    const city = user?.address?.city ?? 'Unknown';
   

// 7. How to define function types in TypeScript?
//    type Greet = (name: string) => string;
//    const greetUser: Greet = name => `Hello ${name}`;
   

// 8. What is the difference between interface and type alias?
//     Interfaces can be extended; type aliases can use unions.
//    interface Person {
//      name: string;
//    }
//    type ID = string | number;
   

// 9. Access Modifiers
//    class Car {
//      public brand: string;
//      private price: number;
//      protected year: number;
//    }
   

// 10. What are readonly properties?
// class Employee {
//   readonly id: number;
//   constructor(id: number) {
//     this.id = id;
//   }
// }




// 🔹 Senior Software Engineer (SSE) Questions with Answers & Code:
// 1. What are utility types (Partial, Pick, Omit)?
//    interface User {
//      name: string;
//      age: number;
//      email: string;
//    }
//    const partialUser: Partial<User> = { name: 'A' };
   

// 2. keyof, typeof, and infer
//    type Keys = keyof User; // 'name' | 'age' | 'email'
//    const user = { name: 'A', age: 25 };
//    type UserType = typeof user;
   

// 3. How do generics work?
//    function identity<T>(arg: T): T {
//      return arg;
//    }
//    let output = identity<string>('Hello');
   

// 4. Conditional types
//    type IsString<T> = T extends string ? true : false;
//    type Test = IsString<'abc'>; // true
   

// 5. Mapped types
//    type ReadOnly<T> = {
//      readonly [K in keyof T]: T[K];
//    };
   

// 6. Discriminated Unions
//    type Shape = 
//      | { kind: 'circle'; radius: number }
//      | { kind: 'square'; side: number };

//    function area(shape: Shape) {
//      switch (shape.kind) {
//        case 'circle': return Math.PI  shape.radius  2;
//        case 'square': return shape.side  2;
//      }
//    }
   

// 7. Type Guards & Narrowing
//    function print(value: string | number) {
//      if (typeof value === 'string') {
//        console.log(value.toUpperCase());
//      } else {
//        console.log(value.toFixed(2));
//      }
//    }
   

// 8. Template literal types
//    type EventName = `on${Capitalize<string>}`;
   

// 9. Declaration merging
//    interface Person { name: string; }
//    interface Person { age: number; }
//    const person: Person = { name: 'A', age: 30 };
   

// 10. Enum compilation behavior
// enum Status { Active, Inactive }
// console.log(Status[0]); // 'Active'

