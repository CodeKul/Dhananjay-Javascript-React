import React, {useContext} from 'react'
import { MusicPlayerContext } from './MusicPlayerContext'

export default function useMusicPlayer() {
    const [state, setState] = useContext(MusicPlayerContext)

    function playTrack(index){
        console.log(index);
        if(index===state.currentTrackIndex){
            togglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState(state=> ({...state, currentTrackIndex: index, isPlaying: true}))
        }

    }



    function togglePlay(){
        if(state.isPlaying){
            state.audioPlayer.pause()
        } else {
            state.audioPlayer.play()
        }
    }


    return {
playTrack,
        trackList: state.tracks
    }
}
