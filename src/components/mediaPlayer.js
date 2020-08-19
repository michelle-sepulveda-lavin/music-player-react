import React, { useRef, useState, useEffect } from 'react';
import Controles from './controles';
import ListadoCanciones from './listadoCanciones';

const MediaPlayer = () => {
    const [state, setState] = useState([]);

    let cancionRef = useRef(null);
    const [next, setNext] = useState();

    useEffect(() =>{
        console.log("Component Mounted");
        getSongs()
    },[]);

    const getSongs = () =>{
        fetch("https://assets.breatheco.de/apis/sound/songs")
        .then((response)=>{
            return response.json()
        })
        .then((data) => {
            setState(data) 
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const setMusic = index => {
        /* console.log(set[index].url) */
        let aux = state[index].url;
        cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux}`;
        setNext(index);
    }
    const playMusic = () => {
        cancionRef.play()
    };
    const pauseMusic = () => {
        cancionRef.pause()
    }

    const nextSong = () => {
        if (next < state.length - 1) {
            let aux2 = state[next + 1].url;
            cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux2}`;
            cancionRef.play()
            setNext(next + 1)
        } else {
            let aux3 = state[0].url;
            cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux3}`;
            cancionRef.play()
            setNext(0)
        }
    }

    const previousSong = () => {
        if (next === 0) {
            let aux4 = state[state.length - 1].url;
            cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux4}`;
            cancionRef.play()
            setNext(state.length - 1)
        } else {
            let aux5 = state[next - 1].url;
            cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux5}`;
            cancionRef.play()
            setNext(next - 1)
            /*  console.log(next) */
        }
    }

    const downVolumen = () => {
        if(cancionRef.volume > 0){
            /* cancionRef.volume -= 0.1 */
            cancionRef.volume = Math.max(0, cancionRef.volume - 0.1);
        }
    }
    const upVolumen = () => {
        /* cancionRef.volume += 0.1 */
        cancionRef.volume = Math.min(1, cancionRef.volume + 0.1);
    }

    const repeatSong = (e) =>{
        e.target.style.color === "black"? e.target.style.color = "rgb(24, 202, 202)": e.target.style.color = "black";
        e.target.style.color === "black"? cancionRef.loop = true : cancionRef.loop = false;     
    }

    const randomSong = (e) =>{ //mejorar
        let auxiliar;
        e.target.style.color === "black"? e.target.style.color = "rgb(24, 202, 202)": e.target.style.color = "black";  
        if(e.target.style.color === "black"){
            auxiliar = Math.floor(Math.random()*state.length);
            let aux6 = state[auxiliar].url;
            cancionRef.src = `https://assets.breatheco.de/apis/sound/${aux6}`;
            cancionRef.play()
        }        
    }    

    return (
        <div className="container" id="reproductor">
            <div className="row">
                <div className="col-12">
                    <h1 id="tituloReproductor"><i className="fas fa-headphones" id="aud"></i> Music Player</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ListadoCanciones canciones={state} setMusic={setMusic} className="scrollbar-width-auto"/>
                </div>
            </div>
            <div className="row">
                <div className="col-12" id="timeLine">
                
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Controles 
                    playMusic={playMusic} 
                    pauseMusic={pauseMusic} 
                    nextSong={nextSong} 
                    previousSong={previousSong} 
                    downVolumen={downVolumen} 
                    upVolumen={upVolumen} 
                    repeatSong={repeatSong}
                    randomSong={randomSong}
                    />
                    <audio  autoPlay src="" ref={(target) => cancionRef = target} />
                </div>
            </div>
        </div>
    )
};

export default MediaPlayer;