

export default function Listsongs(songs) {
  console.log(songs);
  // console.log(index);
  return (
    <div className='Songs'>
    <div className='num'>{songs.index+1}</div>
    <div className='songsDeatil'>
      <div className='songsName'>{songs.songs.name}</div>
      <div className='songsSinger'>{songs.songs.ar[0].name}</div>
    </div>
  </div>
  )
}
