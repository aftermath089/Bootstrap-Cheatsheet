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

//test record function
describe('record', () => {
    const heroes = [{name: 'Batman'}, { name: 'Black Panther'}]
    
    test('add data via record function', () =>{
        const model = new Model()
        model.record(heroes)
        expect(model.$collection).toEqual(heroes)
    })

    test('add data via constructor', () => {
        const spy = jest.spyOn(Model.prototype, 'record') //spy to watch if record function in constructor is being called
        const model = new Model(heroes)
        expect(spy).toHaveBeenCalled()
        spy.mockRestore()
    })
})

//test all function: 2 common case -> there is data to return or no data to return
describe('all', () => {
    test('retrieve all data if there is data', () => {
        const model = new Model([{ name: 'Batman'}, { name: 'Joker' }])
        expect(model.all().length).toBe(2)
    })

    test('retrieve all data if there is no data', () => {
        const model = new Model()
        expect(model.all()).toEqual([])
    })

    test('make sure data is unchageable', () => {
        const model = new Model([{ name: 'Batman' }])
        const data = model.all()
        data[0].name = 'Joker'
    
        expect(model.$collection[0].name).toBe('Batman')
    })
})

describe('find', () => {
    const heroes = [{id: 1, name: 'Batman'}, { id:2, name: 'Black Panther'}]

    test('return null if no match',()=> {
        const model = new Model()
        expect(model.find(1)).toEqual(null)
    })

    test('return name of heroes', () => {   
        const model = new Model(heroes)
        expect(model.find(1)).toEqual(heroes[0])
    })
})

//test update function: 3 common case -> update by id,  update and extend by id, return false if entry not found
describe('update', () => {
    const heroesAndVillains = [{ id: 1, name: 'Batman' }]
    let model
  
    beforeEach(() => {
      const dataset = JSON.parse(JSON.stringify(heroesAndVillains)) //this disbale you to accdentaly change heroesAndVillains
      model = new Model(dataset)
    })
  
    test('an entry by id', () => {
      model.update(1, { name: 'Joker' })
      expect(model.find(1).name).toBe('Joker')
    })
  
    test('extend an entry by id', () => {
      model.update(1, { cape: true })
      expect(model.find(1)).toEqual(
        expect.objectContaining({
          name: 'Batman',
          cape: true
        })
      )
    })
  
    test('return  false if no entry matches', () => {
      expect(model.update(2, {})).toBe(false)
    })
  })