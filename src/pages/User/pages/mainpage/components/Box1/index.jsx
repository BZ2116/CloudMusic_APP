import './index.css'

export default function Box1() {
  
  return (
    <div id='box1'>
      <div className='box1title'>音乐品味</div>
      <div id='bigbox'>
      <div className='smallbox' id='a1'>
        <div className='smalltitle'>我的喜欢</div>
        <div className='data1'>2首</div>
        <div className='buttom'>喜欢的音乐</div>
      </div>
      <div className='smallbox'  id='a2'>
        <div className='smalltitle'>累计听歌</div>
        <div className='data1'>91首</div>
        <div className='buttom'>听歌排行</div>
      </div>
      <div className='smallbox' id='a3'>
        <div className='smalltitle'>本周关键词</div>
        <div className='data1'>属于你的音乐档案</div>
        <div className='buttom'>黑胶时光机</div>
      </div>
      </div>
    </div>
  )
}
