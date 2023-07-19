import axios from 'axios';
import './index.css';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




export default function User() {
  //路由切换
  const location = useLocation()
  const navigate = useNavigate()
  function handleBackMain() {
    navigate('/main')
  }
  function handleUserDetail() {
    navigate('/userdetail')
  }

  const [data, setData] = useState(null);
  const [lv, setLv] = useState()

  //网络请求
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://netease-cloud-music-api-wy6l.vercel.app/user/detail?uid=8334102993', { timeout: 8000 });
      setData(response.data.profile);
      setLv(response.data.level)
    } catch (error) {
      console.log(error);
      alert('连接超时')

    }
  };

  return (<div style={{ height: "100%" }}>
    {data ? (
      <div id='UserBox'>
        <div className="Userhead">
          <div id='returnbutt' onClick={handleBackMain}>◁</div>
          <div className="UserheadCover">
          </div>
          <div className='UserFirst'>
            <img src={data.avatarUrl}></img>
            <div className='Username'>{data.nickname}</div>
            <div className='UserFirst1'>
              <span className='detail1'>{data.follows}&nbsp;关注</span>
              <span className='detail1'>{data.followeds}&nbsp;粉丝</span>
              <span className='detail1'>Lv.{lv}</span>
            </div>
            <div className='UserSecond'>
              <span className='detail2' onClick={handleUserDetail}>编辑资料</span>
            </div>
          </div>

        </div>
        <div className='UserNav'>
          <NavLink className='navs' to='mainpage'>主页</NavLink>
          <NavLink className='navs' to='trends'>动态</NavLink>
          <NavLink className='navs' to='blog'>播客</NavLink>
          <div className={`navline ${location.pathname === '/user/blog' ? 'B' : location.pathname === '/user/trends' ? 'T' : 'M'}`}>—</div>
        </div>
        <Outlet /> </div>) :
      (<div>Loading.....</div>)
    }
  </div>
  )


}
{/* <img src={data.avatarUrl}></img> */ }