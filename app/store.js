//NOTE The goal of the store is to hold all the data for the entire application.
// The store also holds all of the models based on the data provided.

// The state holds all the data (THIS IS PRIVATE).
let _state = {
  collectibles: []
}
class Store {
  get State() {
    return _state
  }

  commit(prop, data) {
    _state[prop] = data
  }

  // I added the get Collectibles() below following the instructions in 22. Working with Templates.
  // I wasn't sure if this is correct but this is the only place I can find that has _state.
  // get Collectibles() {
  //   return _state.collectibles.map(v => new Collectible(v))
  // }
}

const store = new Store()
export default store