import Card from './component/card.jsx'
import nav from './component/Navbar.jsx'
import SquareCards from './component/squarecards.jsx'
function App() {
  return <div className='parent'>
    <Card Company= "Amazon" day = "5" role = "Senior UI/UX Designer" part_time = "Part time" level = "Senior level" money = "120"/>
    <Card Company="Google" day = "10" role = "Graphic Designer" part_time = "Part time" level = "Flexible shedule" money = "122"/>
    
    
    
  </div>

}
export default App
