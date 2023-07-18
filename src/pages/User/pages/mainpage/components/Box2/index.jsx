import './index.css'
import SongsList from './components/songs'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
export default function Box2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://netease-cloud-music-api-wy6l.vercel.app/user/playlist?uid=8334102993', { timeout: 5000 });
      setData(response.data.playlist);
      // console.log(response.data.playlist);
    } catch (error) {
      console.log(error);
      alert('歌单列表连接超时')
    }
  };

  return <div id="box2">
    {data ?
      <div>
        <div id="songsListTitle">创建的歌单<span>({data.length - 1}个)</span></div>
        <div className="songList">
          {/* {components} */}
          {data.slice(1).map((list) => {
            return (
              <SongsList  lists={list} key={list.name} />)
          })}
        </div>
      </div> :
      (<div>Loading...</div>)
    }
  </div>

}
