import movies from './movies'

describe('Favorite Movies', () => {
  //fresh the array
  let myMovies = []
  
  //before each test initiate myMovies (or the second test will fail)
  beforeEach(() => {
    myMovies = [{
      title: 'Age of Ultron',
      rate: null
    }]
  })

  test.only('can add a movie', () => {
    // myMovies = [{
    //     title: 'Age of Ultron',
    //     rate: null
    // }]

    movies.add(myMovies, 'Kung Fury')
    expect(myMovies).toMatchSnapshot()
  })

  test('rate a movie', () => {
    // myMovies = [{
    //     title: 'Age of Ultron',
    //     rate: null
    // }]

    movies.rate(myMovies[0], 5)
    expect(myMovies).toMatchSnapshot()
  })
})