import Collectible from "../models/Collectible.js"
import Store from "../store.js"


//NOTE Gets information/requests from the controller applies all business logic and based on that returns certain data from the store.

class CollectibleService {
  constructor() {
    console.log("Creating Service")
  }
  createCollectible() {
    console.log("Creating collectible from the service.")
    let newCollectible = new Collectible("New Collectible")
    let collectibles = [...Store.State.collectibles, newCollectible]
    Store.commit("collectibles", collectibles)
  }

}

const service = new CollectibleService()
export default service