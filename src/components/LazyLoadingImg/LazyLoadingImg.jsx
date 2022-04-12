import { useEffect, useRef } from "react";

function LazyLoadingImg({ url, classN }) {
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        img.setAttribute("src", url);
      }
    });
    if (img) observer.observe(img);
    return () => {
      if (img) observer.unobserve(img);
    };
  }, []);
  return <img ref={imgRef} alt={url} className={classN} />;
}

export default LazyLoadingImg;
