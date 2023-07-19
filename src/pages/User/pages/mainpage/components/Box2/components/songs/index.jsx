import { useNavigate } from 'react-router-dom';


export default function SongsList(lists) {
  const navigate = useNavigate()
  const handleSongs = (n, id) => {
    navigate(`/playlist/?name=${n}&id=${id}`)
  }


  return (
    <div className='songs' onClick={() => {
      handleSongs(lists.lists.name, lists.lists.id)
    }}>
      <img className="songsCover" src={lists.lists.coverImgUrl}></img>
      <div className="songsDetail">
        <div className="listName">{lists.lists.name}</div>
        <div className="songsAmount">{lists.lists.trackCount}首</div>
      </div>
    </div>
  )
}
