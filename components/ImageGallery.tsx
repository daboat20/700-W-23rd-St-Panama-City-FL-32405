import React, { useCallback, useState } from 'react';
import { CHEVRON_LEFT_ICON, CHEVRON_RIGHT_ICON, MAP_ICON, PHOTOS_ICON, STREET_VIEW_ICON } from '../../constants';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = useCallback(() => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, images.length]);

    return (
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <div
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                className="w-full h-full bg-center bg-cover duration-500 transition-transform ease-in-out"
            ></div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
                <button 
                    onClick={goToPrevious}
                    className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
                    aria-label="Previous image"
                >
                    {CHEVRON_LEFT_ICON}
                </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                <button 
                    onClick={goToNext}
                    className="bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-60 transition"
                    aria-label="Next image"
                >
                    {CHEVRON_RIGHT_ICON}
                </button>
            </div>

            <div className="absolute bottom-4 left-4 flex space-x-2 z-10">
                <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                    {MAP_ICON}
                    <span>View Map</span>
                </button>
                <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                    {STREET_VIEW_ICON}
                    <span>Street View</span>
                </button>
            </div>
            <div className="absolute bottom-4 right-4 z-10">
                 <button className="flex items-center space-x-2 bg-white text-gray-800 px-3 py-1.5 rounded-md text-sm font-medium shadow hover:bg-gray-100 transition">
                    {PHOTOS_ICON}
                    <span>{images.length} Photos</span>
                </button>
            </div>
        </div>
    );
};

export default ImageGallery;