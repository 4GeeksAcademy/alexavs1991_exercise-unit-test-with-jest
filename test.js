const { sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});



test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test ("One dollar should be 156.5 yen", () => {
    const {fromDollarToYen} = require('./app.js');
    const yens = fromDollarToYen(2.5);
    const expected = 2.5 * 156.5;
    expect(fromDollarToYen(2.5)).toBe(391.25);
})



test ("One Yen should be 0.87 Pound", () => {
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(1.5);
    const expected = 1.5 * 0.87;
    expect(fromYenToPound(1.5)).toBe(1.305);
})