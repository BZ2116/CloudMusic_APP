import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DetailS from './detailSider';
import { useState, useEffect } from 'react';


export default function Sider({ showSider }, { handleSider }) {
  // 这里传的参数有时候要报错,但是效果不影响。。。。。
  const navigate = useNavigate()
  function handleUser() {
    navigate('/user')
  }
  const handleShadow = () => {
    handleSider()
  }

  const [data, setData] = useState(null);
  // 网络请求
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://netease-cloud-music-api-wy6l.vercel.app/user/detail?uid=8334102993", { timeout: 5000 });
      setData(response.data.profile);
    } catch (error) {
      alert('连接失败，网络问题')

    }
  };

  return (<div>
    {data ?
      (<div>
        <div
          className={`sider ${showSider ? 'show-sider' : ''}`}
        >
          <div className='siderTop'>
            <div className='avatarimg' onClick={handleUser}><img src={data.avatarUrl} ></img></div>
            <div className='userName' onClick={handleUser} >{data.nickname}</div>
          </div>
          <div>
            <DetailS />
          </div>
        </div>
        <div
          onClick={handleShadow}
          className={`shadow-cover ${showSider ? `shadow-cover-show` : ''}`}></div>
      </div>) :
      (<div></div>)}
  </div>
  )
}
