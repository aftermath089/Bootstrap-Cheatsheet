test('expectation', () => {
    // usetoBe to compare native variables
    expect('a string').toBe('a string') 
    expect(13).toBe(13)

    // use toEqual to compare arrays or objects
    expect([13]).toEqual([13]) 

    // or to random value
    const result = {
        value : Date.now()
    }

    expect(result).toEqual({
        value : expect.any(Number)
    })
})