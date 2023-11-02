import paper from '@/assets/image/paper1920.jpg';
import { useEffect, useState } from 'react';

const useImgLoading = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${paper}`;
    if (img.complete) {
      setIsImageLoaded(true);
    } else {
      img.onload = () => {
        setIsImageLoaded(true);
      };
    }
  }, []);
  return { isImageLoaded };
};

export default useImgLoading;
