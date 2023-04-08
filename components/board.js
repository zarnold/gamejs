import { boardgame, boardrow, cell } from './board.module.css'


export class Board {
  constructor (params) {
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

        row.appendChild(sq)
      }
      this.node.appendChild(row)
    }
  }

}

