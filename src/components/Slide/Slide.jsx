
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// eslint-disable-next-line react/prop-types
const SlideShow = ({ images }) => {
  const slideImages = images;

  const properties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
  };

  return (
    <div className="slide-container" style={{ height: '100%' }}>
      <style>
        {`
          .each-slide {
            transition-timing-function: ease-in-out !important;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
      <Slide {...properties}>
        {slideImages.map((image, index) => (
          <div key={index} className="each-slide" style={{ height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundImage: `url(${image.url})` }}>
            <span>{image.text}</span>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
