import { boardgame, boardrow, cell } from './board.module.css'
import { Pawn } from '/components/pawn'

export class Board {
  constructor(params) {
    const { width, height } = params

    this.node = document.createElement('div')
    this.node.setAttribute('id', 'mainBoard')
    this.node.classList.add(boardgame)

    this.state = {
      selected: null
    }

    for (let i = 0; i < height; i++) {
      const row = document.createElement('div')
      row.classList.add(boardrow)
      for (let j = 0; j < width; j++) {
        const sq = document.createElement('div')
        sq.classList.add(cell)



        // A Friend on 1 case out of ten
        if (Math.random() < 0.05) {
          this.addUnit({ targetCase: sq, name: 'Friend' })
        }

        if (Math.random() < 0.1) {
          this.addUnit({ targetCase: sq, name: 'Foe' })
        }

        sq.addEventListener('click', () => (this.selectCase(sq)))
        row.appendChild(sq)


        row.appendChild(sq)

      }
      this.node.appendChild(row)
    }
  }

  addUnit({ targetCase, name }) {
    const unit = new Pawn({ name: name })
    window.setInterval(() => unit.hurt(Math.floor(Math.random() * 22)), 1500)
    targetCase.appendChild(unit.node)
    // So you keep your context thx to arrow function
    // FIXME : should be in a method add Hero or smthng like that
    unit.node.addEventListener('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
      this.selectPawn(unit)
    }.bind(this))
  }

  selectPawn(target) {
    this.state.selected = target

  }

  selectCase(target) {
    if (this.state.selected) {
      const selectedPawn = this.state.selected.node
      selectedPawn.parentNode.removeChild(selectedPawn)
      target.appendChild(selectedPawn)
      this.state.selected = null
    }
  }

}

