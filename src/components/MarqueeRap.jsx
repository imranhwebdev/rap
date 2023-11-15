import React from 'react'
import BanarmarqueeImg1 from '../assets/img/$RAP.png';
import Marquee from "react-fast-marquee";
function MarqueeRap() {
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
  return (
    <div className='marquee__rap'>
        <Marquee direction="right">
            {marqueeImgs.map((marqueeImg, index) => (
                <figure key={index}>
                    <img src={marqueeImg.image} alt={marqueeImg.alt} />
                </figure>
            ))}
        </Marquee>
    </div>
  )
}

export default MarqueeRap
