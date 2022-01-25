const  copylist = require('./copylist')
test('copy list',() => {
    const list1 = [6,3,5]
    expect(copylist(list1)).toEqual(list1)
    expect(copylist(list1)).not.toBe(list1)
})

//jest cannot check multiple function, jest here.