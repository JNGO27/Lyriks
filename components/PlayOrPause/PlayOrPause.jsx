import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayOrPause = ({ isPlaying, activeSong, handlePlay, handlePause, song }) => (
  isPlaying && activeSong === song ? (
    <FaPauseCircle size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} onClick={handlePlay} />
  )
)

export default PlayOrPause;