const user = {
    name: 'john doe',
    age: '42',
    job: 'inventor'
}

test('match user snapshot', () =>{
    expect(user).toMatchSnapshot() //to save the snapshot using toMatchSnapshot(). if you want to update the snapshot file run the npm test with -u
})