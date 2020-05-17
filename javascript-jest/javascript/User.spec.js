import User from './User'

//use describe to group the test
describe('User', () => {
    //test if output is as expected
    test('name returns full name', () => {
        const user = new User({ firstName: 'John', lastName: 'Doe' })

        expect(user.name).toBe('John Doe') //expect the output
    })
})
