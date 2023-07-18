import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Listsongs from './components'

import './index.css'

export default function Playlist() {

  const queryString = window.location.search;
  // 解析查询字符串
  const params = new URLSearchParams(queryString);
  const id = params.get('id')
  const name = params.get('name')
  const [data, setData] = useState()
  const [datalist, setDataList] = useState()
  useEffect(() => {
    fetchData2()
    fetchData();

  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://netease-cloud-music-api-wy6l.vercel.app/playlist/track/all?id=${id}&offset=0`, { timeout: 5000 });
      setData(response.data.songs);
    } catch (error) {
      console.log(error);
      alert('歌单列表连接超时')
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get(`https://netease-cloud-music-api-wy6l.vercel.app/playlist/detail?id=${id}`, { timeout: 5000 });
      setDataList(response.data);
    } catch (error) {
      console.log(error);
      alert('歌单列表连接超时')
    }
  };


  const navigate = useNavigate()
  function handleBackUser() {
    navigate('/user')
  }
  return (<div style={{ height: "100%" }}>
    {
      data && datalist ?
        (<div style={{ height: "100%" }}>

          <div className="songsHeader" >
            <div id='blurback' style={{ backgroundImage: `url(${datalist.playlist.coverImgUrl})` }} >
            </div>
            <div className='firstbox'><span className='songsBack' onClick={handleBackUser}></span>歌单</div>
            <div className='secondbox'>
              <img className="songsCover2" src={datalist.playlist.coverImgUrl}></img>
              <div className="songsDetail2">
                <div className="listName2">{name}</div>
                <div className="founder">TEST-BZ</div>
              </div>
            </div>
            <div className='thirdbox'>
              <span>分享</span>
              <span>评论</span>
              <span>收藏</span>
            </div>
          </div>
          <div className="songsBody">
            <div className='topbox'>播放全部</div><hr />
            <div className='SongList'>
              {
                data.map((song, i) => {
                  return (
                    <Listsongs songs={song} index={i} key={i} />
                  )
                })
              }


              {

              }
            </div>
          </div>
        </div>) :
        (<div>Loading....</div>)
    }
  </div>
    // <div style={{ height: "100%" }}>

    //   <div className="songsHeader" >
    //     <div id='blurback' >
    //     </div>
    //     <div className='firstbox'><span className='songsBack' onClick={handleBackUser}></span>歌单</div>
    //     <div className='secondbox'>
    //       <img className="songsCover2" src='http://p1.music.126.net/IrOMEVED-crFisIHIYsMQg==/109951168742395724.jpg?imageView&quality=89'></img>
    //       <div className="songsDetail2">
    //         <div className="listName2">TEST-1</div>
    //         <div className="founder">TEST-BZ</div>
    //       </div>
    //     </div>
    //     <div className='thirdbox'>
    //       <span>分享</span>
    //       <span>评论</span>
    //       <span>收藏</span>
    //     </div>
    //   </div>
    //   <div className="songsBody">
    //     <div className='topbox'>播放全部</div><hr />
    //     <div className='SongList'>
    //       <div className='Songs'>
    //         <div className='num'>1</div>
    //         <div className='songsDeatil'>
    //           <div className='songsName'>大眠</div>
    //           <div className='songsSinger'>王心凌</div>
    //         </div>
    //       </div>
    //       <div className='Songs'>
    //         <div className='num'>1</div>
    //         <div className='songsDeatil'>
    //           <div className='songsName'>大眠</div>
    //           <div className='songsSinger'>王心凌</div>
    //         </div>
    //       </div>
    //       {

    //       }
    //     </div>
    //   </div>
    // </div>
  )
}
