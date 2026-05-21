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
            <p className='p'>Amazon <span className='span'>5 days ago</span></p>
            <h2 className='p2'>Senior UI/UX Designer</h2> 
            <div className='tag'>
              <div className='tag_div'>
                <p className='tag_h'>Part time</p>
              </div>
              <div className='tag_div'>
                <p className='tag_h'>Senior level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className='bottom_div'>
          <div className='bottom_div_left'>
            <h2 className='text'>$120/hr</h2>
          </div>
          <div className='bottom_div_right'>
            <button className='apply'>Apply now</button>
          </div>


        </div>
        
      </div>
    </div>
  </div>
}
 
export default Card