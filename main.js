import './style.css'

import { Board } from './components/board.js'


const mainBoard = new Board({ width: 30, height: 30 })

const container = document.getElementById('app')
container.appendChild(mainBoard.node)
