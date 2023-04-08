import './style.css'

import { Board } from './components/board'


const mainBoard = new Board({ width: 30, height: 30 })

const container = document.getElementById('app')
container.appendChild(mainBoard.node)
