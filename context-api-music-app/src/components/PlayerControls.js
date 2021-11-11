import React from 'react'
import useMusicPlayer from './useMusicPlayer'

export default function PlayerControls() {
    const{isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack} = useMusicPlayer();
    return (
        <div>
            
            <button>Play/Pause</button>
            
        </div>
    )
}
