

//  ===== Most Important Topics for Senior Angular Developer Interview ====
// Must prepare these 100%:
// 1. Generics
// 2. Union & Intersection
// 3. Utility types
// 4. keyof
// 5. unknown vs any vs never
// 6. Type guards
// 7. Interfaces vs types
// 8. Function types
// 9. Readonly
// 10. Generic services in Angular


// ===== Basic =======
// 1. Why TypeScript when we already have JavaScript?
//     TypeScript adds type safety, better tooling, early error detection, and scalability for large projects.
//    let name: string = 'Ganesh';
//    name = 10; // ❌ Error: Type 'number' is not assignable to type 'string'

//  1️⃣ Why TypeScript when we already have JavaScript?
// TypeScript adds **types** on top of JavaScript.
// It helps catch errors **before running the code**.

//  Why we need it:
// * Detects errors at compile time
// * Better auto-completion
// * Easier to maintain large projects
// * Safer refactoring

//  Real-time Example:
//  JavaScript (problem):
// ```js
// function add(a, b) {
//   return a + b;
// }
// add(10, "20"); // Output: "1020" (unexpected)
// ```

//  TypeScript (safe):
// ```ts
// function add(a: number, b: number): number {
//   return a + b;
// }

// add(10, "20"); // ❌ Error before running
// ```

// 👉 TypeScript prevents bugs early.

//  2️⃣ What are Enums in TypeScript?
// Enums define a **fixed set of named values**.
//  Example:
// ```ts
// enum Role {
//   Admin,
//   User,
//   Guest
// }

// let userRole: Role = Role.Admin;
// ```

//  Real-time Example:
// User roles in an application:
// ```ts
// if (userRole === Role.Admin) {
//   // show admin dashboard
// }
// ```
// 👉 Makes code readable and prevents invalid values.

//  3️⃣ What is a Tuple in TypeScript?
// A tuple is an **array with fixed types and fixed order**.
//  Example:
// ```ts
// let user: [string, number];
// user = ["Ganesh", 30]; // ✅ correct
// user = [30, "Ganesh"]; // ❌ wrong order
// ```

//  Real-time Example:
// Returning multiple values:
// ```ts
// function getUser(): [string, number] {
//   return ["Ganesh", 30];
// }
// ```

// 👉 Useful when structure and order matter.

//  4️⃣ What is Type Assertion?
// Telling TypeScript:
// > “Trust me, I know the type.”
//  Example:
// ```ts
// let input = document.getElementById("username") as HTMLInputElement;
// input.value = "Ganesh";
// ```

//  Real-time Example:
// When working with DOM elements or API responses.
// 👉 Used when TypeScript cannot automatically detect the type.
// ---

//  5️⃣ Difference between `any`, `unknown`, and `never`

//  `any`
// * Turns off type checking.
// ```ts
// let value: any = 10;
// value = "hello"; // allowed
// ```

// ⚠ Not recommended.

//  `unknown`
// * Safer than `any`
// * Must check type before using

// ```ts
// let value: unknown = "hello";
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }
// ```

//  `never`
// * Represents values that **never occur**
// * Used in functions that never return

// ```ts
// function throwError(): never {
//   throw new Error("Error");
// }
// ```

//  6️⃣ How to Define Function Types?
//  Method 1:
// ```ts
// function add(a: number, b: number): number {
//   return a + b;
// }
// ```

//  Method 2 (Function Type Variable):
// ```ts
// let multiply: (a: number, b: number) => number;
// multiply = (x, y) => x * y;
// ```

// 👉 Useful for callbacks.
//  7️⃣ Difference Between `interface` and `type`
//  Interface
// * Used for object structure
// * Can be extended
// ```ts
// interface User {
//   name: string;
//   age: number;
// }
// ```

//  Type Alias
// * More flexible
// * Can define unions, tuples, primitives

// ```ts
// type ID = string | number;
// ```

//  Real Interview Answer:
// > Use `interface` for objects and `type` when you need unions or advanced types.


//  8️⃣ Access Modifiers
// Used inside classes.
//  public (default)
// Accessible everywhere.

// ```ts
// public name: string;
// ```

//  private
// Accessible only inside class.

// ```ts
// private salary: number;
// ```

//  protected
// Accessible inside class and child classes.

// ```ts
// protected id: number;
// ```

//  Real-time Example:
// ```ts
// class Employee {
//   public name: string;
//   private salary: number;
//   constructor(name: string, salary: number) {
//     this.name = name;
//     this.salary = salary;
//   }

//   getSalary() {
//     return this.salary;
//   }
// }
// ```

// 👉 Protect sensitive data like salary.
//  🏁 Final Interview Summary Line
// > TypeScript improves code safety, maintainability, and scalability by introducing static typing, interfaces, enums, strict checks, and access control over JavaScript.

// 6. Optional chaining (`?.`) and nullish coalescing (`??`)
   // const user = { address: { city: "Hyderabad" } };
   // const city = user?.address?.city ?? 'Unknown';
   

// ========== Advanced TypeScript Concepts ==========
//  1. Generics (Reusable types)
// **Concept:**
// Generics allow you to write reusable and type-safe code.

// **Without Generics**
// ```ts
// function getValue(value: any): any {
//   return value;
// }
// ```
// Problem: no type safety.

// **With Generics**
// ```ts
// function getValue<T>(value: T): T {
//   return value;
// }

// getValue<string>("Ganesh");
// getValue<number>(10);
// ```

// **Real example (API response)**
// ```ts
// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }

// const userResponse: ApiResponse<string> = {
//   data: "Ganesh",
//   status: 200
// };
// ```


//  2. Union Types (`|`)
// Allows multiple types.
// ```ts
// let id: string | number;

// id = 10;
// id = "EMP101";
// ```

// **Real example**
// ```ts
// function printId(id: string | number) {
//   console.log(id);
// }
// ```

//  3. Intersection Types (`&`)
// Combine multiple types.
// ```ts
// interface Person {
//   name: string;
// }

// interface Employee {
//   id: number;
// }

// type Staff = Person & Employee;
// const staff: Staff = {
//   name: "Ganesh",
//   id: 101
// };
// ```

//  4. Type Guards
// Used to check type safely.

// ```ts
// function printValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }
// ```

//  5. keyof Operator
// Gets keys of object.
// ```ts
// interface User {
//   id: number;
//   name: string;
// }

// type UserKeys = keyof User;
// // "id" | "name"
// ```

// **Real example**
// ```ts
// function getValue(obj: User, key: keyof User) {
//   return obj[key];
// }
// ```

//  6. typeof Operator (type level)
// ```ts
// const user = {
//   name: "Ganesh",
//   age: 30
// };

// type UserType = typeof user;
// ```

//  7. Utility Types (Very important)
//  Partial
// All properties optional
// ```ts
// interface User {
//   name: string;
//   age: number;
// }
// const user: Partial<User> = {
//   name: "Ganesh"
// };
// ```


//  Required
// All properties required
// ```ts
// Required<User>
// ```

//  Readonly
// Cannot modify

// ```ts
// Readonly<User>
// ```

//  Pick
// Select specific properties

// ```ts
// type UserName = Pick<User, "name">
// ```

//  Omit
// Remove properties

// ```ts
// type UserWithoutAge = Omit<User, "age">
// ```

//  Record
// Create object type
// ```ts
// type Roles = Record<string, string>;

// const roles: Roles = {
//   admin: "full access",
//   user: "limited access"
// };
// ```

//  8. Mapped Types
// Create type dynamically
// ```ts
// type Optional<T> = {
//   [K in keyof T]?: T[K];
// };
// ```

//  9. Conditional Types
// ```ts
// type IsString<T> = T extends string ? true : false;

// type A = IsString<string>; // true
// type B = IsString<number>; // false
// ```

//  10. Infer Keyword (Advanced)
// Extract type automatically.
// ```ts
// type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
// ```

//  11. Function Overloading
// ```ts
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: any, b: any) {
//   return a + b;
// }
// ```

//  12. Declaration Merging

// ## What it means
// If multiple interfaces have the **same name**, TypeScript will **combine them into one interface automatically**.

// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// const user: User = {
//   name: "Ganesh",
//   age: 30
// };
// Final combined interface becomes:

// ```ts
// interface User {
//   name: string;
//   age: number;
// }
// ```

// ✔ TypeScript merges automatically.


// ## Real-world example (Angular API)
// File 1:
// ```ts
// interface ApiResponse {
//   status: number;
// }
// ```

// File 2:

// ```ts
// interface ApiResponse {
//   data: string;
// }
// ```

// Final becomes:
// ```ts
// interface ApiResponse {
//   status: number;
//   data: string;
// }
// ```

// ## Important Rule (Your question case)
// ❌ This gives error:
// interface User {
//   age: number;
// }

// interface User {
//   age?: number;
// }
// ```

// Error:
// ```
// All declarations of 'age' must have identical modifiers
// ```

// Because one is mandatory and other is optional.
// ✔ Correct:
// ```ts
// interface User {
//   age?: number;
// }

// interface User {
//   name: string;
// }
// ```

// Final:
// ```ts
// interface User {
//   age?: number;
//   name: string;
// }
// ```

// ## Why declaration merging is useful
// In large Angular apps, different modules can extend same interface.

// Example:
// ```ts
// // auth module
// interface User {
//   name: string;
// }

// // profile module
// interface User {
//   profilePhoto: string;
// }
// ```

// Merged automatically.

// # 2. Interface Extends
// ## What it means
// One interface inherits properties from another interface.

// ```ts
// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   salary: number;
// }

// const emp: Employee = {
//   name: "Ganesh",
//   salary: 50000
// };
// ```

// ## Real-world Angular example
// ```ts
// interface ApiResponse {
//   status: number;
// }

// interface UserResponse extends ApiResponse {
//   data: string;
// }
// ```

// Result:
// ```ts
// {
//   status: number;
//   data: string;
// }
// ```

// # 3. Type Intersection
// ## What it means

// Combine multiple types using `&`
// ```ts
// type Person = {
//   name: string;
// };

// type Employee = {
//   salary: number;
// };

// type Staff = Person & Employee;
// const staff: Staff = {
//   name: "Ganesh",
//   salary: 50000
// };
// ```

// # Final Comparison Table (VERY IMPORTANT FOR INTERVIEW)
// | Feature      | Declaration Merging  | Interface Extends   | Type Intersection  |
// | ------------ | -------------------- | ------------------- | ------------------ |
// | How it works | Same name auto merge | One extends another | Combine using &    |
// | Keyword      | none                 | extends             | &                  |
// | Works with   | interface only       | interface only      | type and interface |
// | Automatic    | Yes                  | No                  | No                 |
// | Control      | Less control         | Full control        | Full control       |
// | Best use     | Library / large apps | Inheritance         | Flexible combining |

// # Visual Understanding
// Declaration merging:
// ```ts
// interface A { name: string }
// interface A { age: number }

// // Result auto:
// interface A { name: string; age: number }
// ```

// Interface extends:
// ```ts
// interface A { name: string }

// interface B extends A {
//   age: number;
// }
// ```

// Type intersection:
// ```ts
// type A = { name: string }
// type B = { age: number }

// type C = A & B
// ```


// # Interview best answer (simple)
// Declaration merging automatically combines interfaces with same name.
// Interface extends is used to inherit properties from another interface.
// Type intersection combines multiple types using `&`.

// # Angular recommendation (best practice)
// ✔ Use **interface extends** for API models
// ✔ Use **type intersection** for complex combinations
// ✔ Avoid declaration merging unless necessary

//  13. Modules vs Namespaces
// Modern apps use modules:
// ```ts
// export class User {}
// import { User } from './user';
// ```

//  14. Readonly and Const Assertions
// ```ts
// const user = {
//   name: "Ganesh"
// } as const;
// ```

// Cannot change.

//  15. Advanced Generics Example (Angular Service)
// ```ts
// getData<T>(url: string): Observable<T> {
//   return this.http.get<T>(url);
// }
// ```

// Usage:
// ```ts
// this.api.getData<User[]>('/users');
// ```


// ============ Tricky TypeScript Interview Questions ============ 
//  Question 1
// ```ts
// let value: any = "hello";
// let length: number = value.length;
// ```

// Answer: Works, but unsafe.

// Better:
// ```ts
// let value: unknown = "hello";
// if (typeof value === "string") {
//   value.length;
// }
// ```

//  Question 2
// Output?
// ```ts
// type A = string | number;
// type B = string & number;
// ```

// Answer:
// A = string OR number
// B = never

// Because string and number cannot exist together.

//  Question 3
// ```ts
// function test(): never {
//   throw new Error("Error");
// }
// ```
// never means function never returns.

//  Question 4
// Difference:
// ```ts
// interface A {}
// type B = {}
// ```

// Answer:
// interface
// • supports extension
// • supports merging

// type
// • supports union
// • supports advanced types


//  Question 5
// ```ts
// const user = {
//   name: "Ganesh"
// };

// user.name = "Ram";
// ```

// Works.
// But

// ```ts
// const user = {
//   name: "Ganesh"
// } as const;
// ```

// Now cannot modify.

//  Question 6
// What is difference?
// ```ts
// any vs unknown
// ```

// Answer:
// any → no type safety
// unknown → safe


//  Question 7
// Output?

// ```ts
// let x: never;
// ```

// You cannot assign anything to never.

//  Question 8
// ```ts
// type Status = "success" | "error";
// ```

// Called string literal type.


//  Question 9
// Generic constraint

// ```ts
// function getName<T extends { name: string }>(obj: T) {
//   return obj.name;
// }
// ```

//  Question 10 (Angular real question)
// Why use generics in HttpClient?

// ```ts
// this.http.get<User>()
// ```
// Answer:
// Provides type safety.


// # 1. Function Overloading (Simple Explanation)

//  What is Function Overloading?
// Function overloading means:
// 👉 **Same function name**
// 👉 But **different input types**
// 👉 And **different behavior**

//  Real-time example (Calculator)
// Sometimes you add numbers:
// ```
// add(10, 20) → 30
// ```

// Sometimes you add strings:
// ```
// add("Hello", "World") → HelloWorld
// ```

// Same function name → `add`
// But different types → number, string

// This is Function Overloading.
//  TypeScript Example
// ```ts
// // overload signatures
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// // actual function implementation
// function add(a: any, b: any) {
//   return a + b;
// }

// // usage
// add(10, 20); // number
// add("Hello", "World"); // string
// ```

//  How it works internally
// TypeScript checks input:

// ```
// add(10, 20) → number version
// add("Hello", "World") → string version
// ```

//  Angular real example (Very important)
// Example: API function
// ```ts
// function getData(id: number): User;
// function getData(name: string): User;

// function getData(value: any): User {
//   if (typeof value === "number") {
//     // fetch by id
//   } else {
//     // fetch by name
//   }
// }
// ```

//  Why use Function Overloading?
// Benefits:
// • Better type safety
// • Better autocomplete
// • Cleaner code
// • Interviewers like this answer


// # Interview answer (one line simple)
// "Function overloading means same function name but different input types and behavior."

// # 2. Why "as const" cannot modify value
// Example:
// ```ts
// const user = {
//   name: "Ganesh"
// };
// ```

// You can modify:
// ```ts
// user.name = "Ram"; // allowed
// ```

// Because TypeScript sees it like this:
// ```ts
// {
//   name: string
// }
// ```

// string can change.
// Now see this:
// ```ts
// const user = {
//   name: "Ganesh"
// } as const;
// ```

// Now TypeScript sees:
// ```ts
// {
//   readonly name: "Ganesh"
// }
// ```

// Important changes:
// • readonly → cannot modify
// • "Ganesh" → exact value, not string

// So this will give error:

// ```ts
// user.name = "Ram"; // ❌ Error
// ```
// Because:

// • readonly → cannot change
// • value is fixed → "Ganesh"

// # Simple real-life example
// Normal object:

// ```
// Name written in pencil → can erase and change
// ```
// as const object:
// ```
// Name written in permanent marker → cannot change
// ```

// ---

// # Why use "as const"?

// Use when:
// • fixed values
// • constants
// • configs
// • enums alternative

// Example (Angular roles)
// ```ts
// const ROLES = {
//   ADMIN: "ADMIN",
//   USER: "USER"
// } as const;
// ```

// Now cannot change accidentally.

// # Interview answer (simple one line)
// **Function overloading:**
// "Same function name with different input types."

// **as const:**
// "as const makes object readonly and fixes values so they cannot be modified."

// Real Interview Questions asked in companies like TCS, Infosys, Accenture
// Very common:
// • Difference between any and unknown
// • Difference between interface and type
// • Generics real example
// • Utility types example
// • keyof usage
// • Angular HttpClient generics
// • Type guards
// • readonly
// • never vs void
// • Function overloading
