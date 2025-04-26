const { square, cube } = require("./square");
test(`square 5 to get 25`, () => {
    expect(square(5)).toBe(25);
});

test(`cube 5 to get 125`, () => {
    expect(cube(5)).toBe(125);
});
