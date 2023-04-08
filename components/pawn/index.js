import {pawn, hp, namestyle} from './pawn.module.css'

export class Pawn {
  constructor (params) {
    const { name } = params
    this.name = name
    this._hp = 100

    this.node = document.createElement('div')
    this.node.classList.add(pawn)
    this.hpContainer = document.createElement('div')
    this.hpContainer.classList.add('container')
    this.hpContainer.classList.add(hp)

    this.nameContainer = document.createElement('div')
    this.nameContainer.classList.add('container')
    this.nameContainer.classList.add(namestyle)
    this.nameContainer.innerText = this.name

    this.node.appendChild(this.nameContainer)
    this.node.appendChild(this.hpContainer)
  }

  hurt (damage) {
    this.hp = this.hp > damage ? this.hp - damage : 0
  }

  set hp (value) {
    this._hp = value
    this.hpContainer.innerText = `${this._hp.toString(10)}`
  }

  get hp () {
    return this._hp
  }
}

