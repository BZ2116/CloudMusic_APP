import  './index.css';

//随便写了一些，要不然空着太难看了
export default function DetailS() {
  return (
    <div>
      <div className="detailBox">
        <div className="detailbox first" >消息中心</div><hr/>
        <div className="detailbox">云贝中心</div><hr/>
        <div className="detailbox last">创作者中心</div>
      </div>
      <div className="detailBox">
        <div className='detailtitle'>音乐服务</div><hr/>
        <div className="detailbox">趣测</div><hr/>
        <div className="detailbox">云村有票</div><hr/>
        <div className="detailbox">多多西口袋</div><hr/>
        <div className="detailbox">商城</div><hr/>
        <div className="detailbox">Beat专区</div><hr/>
        <div className="detailbox">口袋彩铃</div><hr/>
        <div className="detailbox last">游戏专区</div>
      </div>
      <div className="detailBox">
        <div className='detailtitle'>其他</div><hr/>
        <div className="detailbox">设置</div><hr/>
        <div className="detailbox">定时关闭</div><hr/>
        <div className="detailbox">个性装扮</div><hr/>
        <div className="detailbox">音乐黑名单</div><hr/>
        <div className="detailbox">边听边存</div><hr/>
        <div className="detailbox">青少年模式</div><hr/>
        <div className="detailbox last" >音乐闹钟</div>
      </div>
    </div>
  )
}
