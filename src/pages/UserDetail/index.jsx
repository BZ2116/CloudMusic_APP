import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { useEffect, useRef, useState } from 'react';



export default function UserDtail() {

  const navigate = useNavigate()
  function handleBackUser() {
    navigate('/user')
  }


  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://netease-cloud-music-api-wy6l.vercel.app/user/detail?uid=8334102993', { timeout: 8000 });
      setData(response.data.profile);
      console.log(response.data.profile);
    } catch (error) {
      alert('连接超时')
    }
  };
  function genderTrans(num) {
    switch (num) {
      case 1:
        return "男";
      case 2:
        return "女";
      default:
        return "保密"

    }
  }

  //输入框字数限制
  const [inputValue, setInputValue] = useState("");
  const [changeInputValue, setchangeInputValue] = useState("")
  const maxLength = 300;
  const remainingChars = maxLength - inputValue.length;

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const [isShow, setisShow] = useState(false)
  function cancel() {
    setisShow(false)
  }
  function handleChangeNickname() {
    setisShow(true)
  }
  const handleSub = (event) => {
    setchangeInputValue(event.target.value);
  };
  function subChange() {
    axios.get(`https://netease-cloud-music-api-wy6l.vercel.app/user/update?gender=${data.gender}&signature=${inputValue ? inputValue : data.signature}&city=${data.city}&&birthday=${data.birthday}&province=${data.province}&nickname=${changeInputValue}`)
      .then(() => {
        alert('修改成功')
      })
  }
  return (
    <div id='detailBox'>
      {data ?
        (<div style={{ overflow: 'scroll' }}>
          <div id="header">
            <span className="headerBack" onClick={handleBackUser}></span>
            我的资料
          </div>
          <div className='Firstbox'>
            <div className='details'>头像
              <img className='imfos' id='avatarimg' src={data.avatarUrl} />
            </div><hr />
            <div className='details'>昵称
              <div className='imfos' onClick={handleChangeNickname} >{data.nickname}</div>
            </div><hr />
            <div className='details'>性别
              <div className='imfos'>{genderTrans(data.gender)}</div>
            </div><hr />
            <div className='details'>二维码</div>
          </div>
          <div className='Sceondbox'>
            <div className='details'>生日
              <div className='imfos'></div></div><hr />
            <div className='details'>地区
              <div className='imfos'></div>重庆&nbsp;南岸</div><hr />
            <div className='details'>大学
              <div className='imfos'></div>CQUPT</div><hr />
            <div className='details'>音乐标签
              <div className='imfos'></div></div><hr />
            <div className='details' id='detailcontext' >简介
              <textarea value={inputValue} placeholder={data.signature} onChange={handleChange} />
              <p>{remainingChars}</p>


            </div>
          </div>
          <div className={`infoChange${isShow ? 'show' : ''}`}>
            <div className='changeHeader'>
              <span onClick={cancel} >取消</span>
              <span id='changeTitle'>修改昵称</span>
              <span onClick={subChange}>完成</span>
            </div>
            <div className='changeInput'><input placeholder={data.nickname} value={changeInputValue} onChange={handleSub} /></div>
          </div>
        </div>) :
        (<div>Loading...</div>)
      }
    </div>
  )
}
// placeholder={`${data.signature}`}