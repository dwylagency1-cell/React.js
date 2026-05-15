import {Bookmark} from 'lucide-react'
import amazonlogo from './img/amazon.png'
function Card() {
    return <div >
    <div className='card'>
      <div className="top">
        <div className="top_left">
          <img className='amazonimg' src={amazonlogo}></img>
        </div>
        <div className="top_right">
          <button className='save'>Save <Bookmark size={20} /></button>
        </div>
      </div>
      <div className="mid">
        <div className="mid_section">
          <div className="inside_mid">
            <h3>Amazon</h3>
          </div>
        </div>
      </div>
      <div className="bottom">
        
      </div>
    </div>
  </div>
}
 
export default Card