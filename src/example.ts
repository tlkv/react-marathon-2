function concat(a: string, b: string): string {
    return a + b;
}

concat('Hello ', 'World')

interface MyHometaskInt {
    howIDoIt: string,
    simeArray: [string?, string?, number?],
    withData: [{ howIDoIt: string, simeArray: [string?, number?] }],
}

const MyHometask: MyHometaskInt = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyArray<T> {
    [N: number]: T;
    reduce<U>(fn: (Accum: T, Item: T) => U): U;
}

const testArray: MyArray<number> = [1, 2, 3];

console.log(testArray.reduce((Accum, Item) => Accum + Item * Item));
console.log(MyHometask);
console.log(concat('Hello ', 'World'));