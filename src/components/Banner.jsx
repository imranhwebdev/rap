import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";
import BgVideo from '../assets/bgvideo.mp4'
import banarmarqueeImg1 from '../assets/img/$RAP.png';
import banarmarqueeImg2 from '../assets/img/$RAP.png';
import banarmarqueeImg3 from '../assets/img/$RAP.png';
import banarmarqueeImg4 from '../assets/img/$RAP.png';
import banarmarqueeImg5 from '../assets/img/$RAP.png';
import banarmarqueeImg6 from '../assets/img/$RAP.png';
import banarmarqueeImg7 from '../assets/img/$RAP.png';
import banarmarqueeImg8 from '../assets/img/$RAP.png';
import banarmarqueeImg9 from '../assets/img/$RAP.png';
import banarmarqueeImg10 from '../assets/img/$RAP.png';
import banarmarqueeImg11 from '../assets/img/$RAP.png';
export default function Banner(){
    const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlayAndMute = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(!isMuted);
    }
  };
const marqueeImgs = [
    {
        id:1,
        image:'banarmarqueeImg1',
    },
    {
        id:2,
        image:'banarmarqueeImg2',
    },
    {
        id:3,
        image:'banarmarqueeImg3',
    },
    {
        id:4,
        image:'banarmarqueeImg4',
    },
    {
        id:5,
        image:'banarmarqueeImg5',
    },
    {
        id:6,
        image:'banarmarqueeImg6',
    },
    {
        id:7,
        image:'banarmarqueeImg7',
    },
    {
        id:8,
        image:'banarmarqueeImg8',
    },
    {
        id:9,
        image:'banarmarqueeImg9',
    },
    {
        id:10,
        image:'banarmarqueeImg10',
    },
    {
        id:11,
        image:'banarmarqueeImg11',
    }
]
    return(
        <div className="banner">
           <div className="hero-section">
                <video ref={videoRef} className="video video-bg" loop autoPlay muted={isMuted}>
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <div className="controls">
                    <button onClick={togglePlayAndMute} className='videoOneOff'>
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPlay} />
                    ) : (
                        <FontAwesomeIcon icon={faPause} />
                    )}
                    </button>
                    <button onClick={toggleMute} className='soundOneOff'>
                    {isMuted ? (
                        <FontAwesomeIcon icon={faVolumeMute} />
                    ) : (
                        <FontAwesomeIcon icon={faVolumeUp} />
                    )}
                    </button>

                </div>
                <div className="banner__marquee">
                    <Marquee>
                        {marqueeImgs.map((image, index)=>(
                            <figure key={index}>
                                <img src={image} alt="" />
                            </figure>
                        ))}
                    </Marquee>
                </div>
                
            </div>
        </div>
        
    )
}
