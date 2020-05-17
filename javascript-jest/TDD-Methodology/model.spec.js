import Model from './model'

// check if model is corectly made
test('new works', () => {
    expect(new Model).toBeInstanceOf(Model)
})

// check the model structure
test('model structure', () => {
    //expect model to be equal to an object containing collection dll dll.
    expect(new Model).toEqual(expect.objectContaining({ 
        $collection: expect.any(Array),
        record: expect.any(Function),
        all: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function),
    }))
})
