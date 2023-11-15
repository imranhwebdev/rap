import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";
import BgVideo from '../assets/bgvideo.mp4'
import BanarmarqueeImg1 from '../assets/img/$RAP.png';
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
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
        {
            image: BanarmarqueeImg1,
            alt: "Description for the image",
        },
    ];
    return(
        <div className="banner">
           <div className="hero-section">
                <video ref={videoRef} className="video video-bg" loop autoPlay muted={isMuted}>
                    <source src={BgVideo} type="video/mp4" />
                </video>
                <div className="controls">
                    <button onClick={togglePlayAndMute} className='videoOneOff'>
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPause} />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} />
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
                        {marqueeImgs.map((marqueeImg, index) => (
                            <figure key={index}>
                                <img src={marqueeImg.image} alt={marqueeImg.alt} />
                            </figure>
                        ))}
                    </Marquee>
                </div>
                
            </div>
        </div>
        
    )
}
