import card from './component/card.jsx'
import nav from './component/Navbar.jsx'
import squareCards from './component/squarecards.jsx'
function App() {
  return <div>
    {nav()}
    {card()}
    {card()}
    {card()}
    {squareCards()}

    


    
  </div>

}
export default App
