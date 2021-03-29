import CollectibleController from "./controllers/CollectiblController.js";

//NOTE This file spins up an app and loads all the controllers
class App {
  collectibleController = new CollectibleController()
}

window["app"] = new App()