import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

import styles from "./ImageCarousel.module.css";

interface CarouselImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageCarouselProps {
  images: CarouselImage[];
};

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const autoplay = useRef(
    Autoplay(
      { delay: 6000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [autoplay.current]);

  return <div className={styles.embla}>
    <div className={styles.viewport} ref={viewportRef}>
      <div className={styles.container}>
        {images.map((img, idx) => (
          <div className={styles.slide} key={idx}>
            <div className={styles.slideInner}>
              <Image
                className={styles.slideImg}
                src={img.url}
                alt={img.alt}
                width={img.width}
                height={img.height}
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
    <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
  </div>;
};