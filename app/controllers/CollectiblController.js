//NOTE The controller takse user input and calls to the service the attempt change data
import CollectibleService from "../services/CollectibleService.js"
import store from "../store.js"
//Private

function _draw() {
  let collectibles = store.State.collectibles
  let templates = ''
  collectibles.forEach(collectible => {
    templates += collectible.Template
  })
  document.getElementById('collectibles').innerHTML = templates
}

// The draw() function below came from the instructions in 22. Working with Templates.
// function _draw() {
//   let collection = CollectibleService.createCollectible  //This was originally _collectableService.Collectables
//   let template = ''
//   collection.forEach(collectible => {
//     template += collectible.Template
//   })
//   document.getElementById('collection').innerHTML = template
// }

//Public
export default class CollectibleController {
  constructor() {
    console.log("Building Controller");
    _draw()
  }
  createCollectible() {
    console.log("Creating the collectible")
    CollectibleService.createCollectible()
    _draw()
  }
}
