import {Bookmark} from 'lucide-react'

function Card(props) {
  
    return <div >
    <div className='card'>
      <div className="top">
        <div className="top_left">
          <img className='amazonimg' src={props.companylogo}></img>
        </div>
        <div className="top_right">
          <button className='save'>Save <Bookmark size={20} /></button>
        </div>
      </div>
      <div className="mid">
        <div className="mid_section">
          <div className="inside_mid">
            <p className='p'>{props.CompanyName} <span className='span'> days ago</span></p>
            <h2 className='p2'></h2> 
            <div className='tag'>
              <div className='tag_div'>
                <p className='tag_h'></p>
              </div>
              <div className='tag_div'>
                <p className='tag_h'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className='bottom_div'>
          <div className='bottom_div_left'>
            <h2 className='text'>$/hr</h2>
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