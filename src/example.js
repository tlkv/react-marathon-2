function concat(a, b) {
    return a + b;
}
concat('Hello ', 'World');
var MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }]
};
var testArray = [1, 2, 3];
console.log(testArray.reduce(function (Accum, Item) { return Accum + Item * Item; }));
console.log(MyHometask);
console.log(concat('Hello ', 'World'));
