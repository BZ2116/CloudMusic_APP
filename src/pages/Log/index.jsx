import axios from 'axios'
import './index.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';

export default function Log() {
  const [phoneData, setPhone] = useState()
  const [passwordData, setPassword] = useState()
  const search = () => {
    axios.post(`https://netease-cloud-music-api-wy6l.vercel.app/login/cellphone?phone=${phoneData}&password=${passwordData}`)
      .then((res) => {
        console.log(res);
      })

  }
  const navigate =useNavigate()
function handleMain(){
navigate('/main')
}

  return (
    <div>
      <div className="box">
        <button id='logbutt' onClick={handleMain}> ◁主页&nbsp;</button>
        <div className="container">
          <div className="form">
            <h2>网易云音乐</h2>
            <form>
              <div className="inputBox">
                <input value={phoneData} onChange={(e) => {
                  setPhone(e.target.value)
                }} type="text" placeholder="手机号" />

              </div>
              <div className="inputBox">
                <input value={passwordData} onChange={(e) => {
                  setPassword(e.target.value)
                }} type="password" placeholder="密码" />

              </div>
              <div className="inputBox">
                <div className='inputBoxButton' onClick={search} >登录</div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}
