import React, {createContext, useState} from 'react'
import Audio1 from "../assets/Audio1.mp3"
import Audio2 from "../assets/Audio2.mp3"
import Audio3 from "../assets/Audio3.mp3"
import Audio4 from "../assets/Audio4.mp3"



export const MusicPlayerContext = createContext()

export default function MusicPlayerProvider(props) {

    const [state, setState] = useState({
        audioPlayer: new Audio(),

        tracks:[
            {
                name: "Song 1",
                file: Audio1
            },
            {
                name: "Song 2",
                file: Audio2
            },
            {
                name: "Song 3",
                file: Audio3
            },
            {
                name: "Song 4",
                file: Audio4
            },
        ],

        currentTrackIndex: null,
        isPlaying: false
    })
    return (
        <div>
            <MusicPlayerContext.Provider value={[state, setState]}>
                {props.children}
            </MusicPlayerContext.Provider>
        </div>
    )
}
