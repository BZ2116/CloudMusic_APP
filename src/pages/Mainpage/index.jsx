
import {  useNavigate } from 'react-router-dom'
import './index.css';
import Sider from './components/sider';
import { useState } from 'react';

export default function Main() {
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const [showSider, setShowSider] = useState(false)

  // const props=this.props
  let threshold = 75//滑动阈值
  // console.log(props);

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setCurrentX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = currentX - startX;
    if (distance < threshold) {
      setShowSider(false);
    } else {
      setShowSider(true);
    }
  };

  const handleSider=() => {
    setShowSider(!showSider)
  }

  const navigate = useNavigate()
  function handleLog() {
    navigate('/log')
  }
  return (
    <div id='mainpage'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      <h1>主页</h1>
      <div id='mainbuttons'>
        <button className='mainbutt' onClick={handleLog}>登录</button>

      </div>
      <Sider showSider={showSider} onClick={handleSider}/>
    </div>
  )
}