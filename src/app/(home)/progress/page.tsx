
"use client"
import 'keen-slider/keen-slider.min.css';
import 'yet-another-react-lightbox/styles.css';

import { useKeenSlider } from 'keen-slider/react';
import Lightbox from 'yet-another-react-lightbox';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StaticImagePreview from '@/modules/progress/static-image-preview';
export default function ProgressPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentIndex(s.track.details.rel);
    },
  });
  const images = [
    '/images/progress/progress1_1.png',
    '/images/progress/progress1_2.png',
    '/images/progress/progress1_3.png',
  ];
  useEffect(() => {
    const imgPromises = images.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); 
      });
    });
  
    Promise.all(imgPromises).then(() => {
      setImagesLoaded(true);
    });
  }, [images]);
 
  return (
    <div className="flex flex-col justify-center items-center mb-40">
      <div
        className="w-full h-[50vw] lg:h-[25vw] 2xl:h-[28vw]"
        style={{
          backgroundImage: "url('/images/home/bitcoin2.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundPosition: "top left",
        }}
      ></div>

      <div className="flex flex-col mt-[-20vw] lg:mt-[-10vw] z-10 w-[76.5%] py-3 lg:px-6 lg:py-12 font-bold text-[5vw] lg:text-[3.2vw] items-center justify-center bg-white text-center">
        Current Progress

        <div className="mt-2 lg:mt-4 text-[3vw]  lg:text-[1.4vw] font-light max-w-[60vw] lg:max-w-xl 2xl:max-w-4xl leading-loose text-black">
          This page shows our current progress by the end of&nbsp;April 7. For the first phase of progress, we developed key infrastructure components for a quantitative trading system.
        </div>
      </div>

      <div className='flex flex-col  w-3/4 lg:mt-20 mt-10'>
        <div className='lg:px-6 2xl:px-44 lg:text-[1.4vw]'>
          First, we implemented a Grafana dashboard to monitor server status and prepare for tracking market news and prices. Grafana’s flexibility allows us to customize and combine dashboards as needed.
        </div>
        <div
            className="relative max-w-4xl mx-auto  py-10 group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {imagesLoaded&&<div ref={sliderRef} className="keen-slider">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="keen-slider__slide cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img
                    src={src}
                    alt={`grafana-${index}`}
                    className="rounded-lg w-full h-auto object-contain"
                  />
                    </div>
                  ))}
                </div>}
            

                {hovered && (
                  <button
                    className="absolute left-4  cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    onClick={() => slider.current?.prev()}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {hovered && (
                  <button
                    className="absolute right-4 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    onClick={() => slider.current?.next()}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  index={currentIndex}
                  slides={images.map((src) => ({ src }))}
                />
        </div>
        <div className='lg:px-6 2xl:px-44 lg:text-[1.4vw] mb-10'>

        Second, we established a Kafka cluster as a message queue to rebalance market data, ensuring the database remains secure and performs efficiently.    
        </div>
        <StaticImagePreview url='/images/progress/progress1_4.png' className='h-[20vw]'/>
        <div className='lg:px-6 2xl:px-44 lg:text-[1.4vw] my-10'>


        Finally, we deployed a ClickHouse database cluster for data storage, utilizing a Buffer Table to enable rapid querying of the latest market data.        </div>
        </div>
        <StaticImagePreview url='/images/progress/progress1_5.png'  className='h-[50vw]'/>

    </div>

  );
}
