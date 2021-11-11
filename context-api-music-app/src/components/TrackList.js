import React from 'react'
import useMusicPlayer from './useMusicPlayer'

export default function TrackList() {

    const {trackList, currentTrackName, playTrack, isPlaying}= useMusicPlayer()
    return (
        <div>
            {trackList.map((track, index)=> {
                console.log(index)
                return(
                    <button onClick={()=> {playTrack(index)}}>{track.name}</button>
                )
            })}
        </div>
    )
}
