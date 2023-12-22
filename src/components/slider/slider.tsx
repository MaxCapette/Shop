'use client';
import SimpleImageSlider from "react-simple-image-slider";

// Définir un type pour une image
interface ImageType {
    url: string;
}

// Définir un type pour les props du composant Slider
interface SliderProps {
    images: ImageType[];
}
export default function  Slider  ({ images }: SliderProps)  {
    if (!Array.isArray(images) || images.length === 0) {
        return null; // ou retourner un élément par défaut si nécessaire
    }
  return (
    <div>
      <SimpleImageSlider
        width={1024}
        height={1024}
        images={images}
        showBullets={false}
        showNavs={true}
      />
    </div>
  );
}