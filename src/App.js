import './App.css';
import Gallery from 'react-photo-gallery';

import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";



function App() {
  
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className='App'>
      <h1>Brenton Dunn</h1>
      <hr />

      <div className='gallery-container'>
      <Gallery photos={photos} onClick={openLightbox} />

      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default App;
