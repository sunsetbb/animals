const  add1 = require('./add1')
test('add1',() => {
    expect(add1(5)).toBe(6)
})

//jest cannot check multiple function, jest here.