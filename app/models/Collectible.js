//NOTE An object that holds all information for the data needed per object.
export default class Collectible {
  constructor (title) {
    this.title = title
    this.date = new Date().toLocaleDateString("en-Us")
  } 
  get Template() {
    return `
    <div class="collectible card">
      <h4>${this.date}</h4>
      <p>${this.title}</p>
    </div>
    `
  }

  // constructor ({image, title, description, rarity, tags}) {
  //   this.image = image || '//placehold.it/200x200'
  //   this.title = title
  //   this.description = description
  //   this.rarity = rarity || 'common'
  //   this.tags = tags || []
  // }
  // get Template() {
  //   return `
  //   <div class="collectible card">
  //     <img src="${this.image}" alt="Collectible Image" class="card-img-top">
  //     <div class="card-body">
  //       <i class="far fa-trsh-alt delete"></i>
  //       <h4 class="card-title">${this.title}</h4>
  //       <p class="card-text">${this.description}</p>
  //       <p class="card-text">${this.rarity}</p>
  //     </div>
  //   </div>
  //   `
  // }
}