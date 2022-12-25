import './App.css'
import Imagem from './sala/Imagem'
import Cards from './sala/Cards'
import Título from './components/Título'

function App() {
  return (
    <div>
    <Título/>
    <Imagem link="https://media.tenor.com/dFRmjNDK9TwAAAAC/ghibli.gif" />
    <Cards />
    </div>
  )
}

export default App
