'use client';
import SimpleImageSlider from "react-simple-image-slider";
import './slider.css';
import { useEffect, useState } from "react";
// Définir un type pour une image
interface ImageType {
    url: string;
}

// Définir un type pour les props du composant Slider
interface SliderProps {
    images: ImageType[];
}
export default function  Slider  ({ images }: SliderProps)  {
    const [sliderSize, setSliderSize] = useState({ width: 600, height: 600 });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 600) {
                setSliderSize({ width: window.innerWidth, height: window.innerWidth });
            } else {
                setSliderSize({ width: 600, height: 600 });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (!Array.isArray(images) || images.length === 0) {
        return null; // ou retourner un élément par défaut si nécessaire
    }
  return (
    <div className="sliderContainer">
      <SimpleImageSlider
        width={sliderSize.width}
        height={sliderSize.height}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
}