import { useNavigate } from 'react-router-dom'
import './index.css'

export default function Play() {
  const navigate=useNavigate()
function handleBacktolast() {
  navigate(-1)
}

  return (
    <div id='playpage'>
      <div id='backfliter'></div>
      <div id='playele'>
        <div className='playheader'>
          <span onClick={handleBacktolast} className='playback'></span>
          <span className='playheadermidbox'>
            <div className='playheadermidsong'>爱你</div>
            <div className='playheadermidsinger'>王心凌</div>
          </span>
          <span className='playheaderright'></span>
      </div>
        <div className='playpic'>456</div>
      </div>
    </div>
  )
}
