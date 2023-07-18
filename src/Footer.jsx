import { useNavigate } from 'react-router-dom'
import './Footer.css'
import {useState} from 'react'

export default function Footer() {
  const [isStart, setisStart] = useState(false)
  // const audioRef = useRef(null);

  function handlePlay() {
    //音乐播放的代码
    // const audioElement = audioRef.current;
    // if (isStart) {
    //   audioElement.pause();
    // } else {
    //   audioElement.play();
    // }
    setisStart(!isStart)
  }
const navigate=useNavigate()
  function playMusic() {
    navigate('/play')
  }
  return (
    <div>
      {/* <audio ref={audioRef} src="path/to/audio.mp3" /> */}
      <div  onClick={playMusic} className='footer'>
        <img id='footerCover'></img>
        <span id='footerSong'>爱你</span>
        <span id='footerSinger'>-王心凌</span>
        <img onClick={handlePlay} className={`footer${isStart?'Start':'Stop'}`}></img>
        <img id='footerList'></img>
      </div>
    </div>
  )
}
