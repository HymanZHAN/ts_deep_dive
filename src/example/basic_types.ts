let num: number = 123;
let str: string = "abc";
str = `数值是${num}`;
console.log(str);

let tuple: [string, number, boolean];
tuple = ["a", 1, false];
console.log(tuple);

enum Roles {
  SUPER_ADMIN,
  ADMIN,
  EDITOR,
  USER
}
