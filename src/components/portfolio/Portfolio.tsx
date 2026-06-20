import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './portfolio.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

function useGalleryColumns() {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width <= 480) setCols(1);
      else if (width <= 900) setCols(2);
      else setCols(4);
    };

    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  return cols;
}

function toThumbWebp(image: string) {
  return image.replace(/\.webp$/i, '-thumb.webp');
}

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none',
  maxWidth: '90%',
  maxHeight: '90%',
};

const ProjectsSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [galleryOpacity, setGalleryOpacity] = useState<number>(1);
  const cols = useGalleryColumns();
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLHeadingElement>();
  const { ref: galleryRef, isVisible: galleryVisible } =
    useScrollReveal<HTMLDivElement>();

  const galleries = [
    photo.itemData,
    photo.itemDataTwo,
    photo.itemDataThry,
    photo.itemDataFour,
    photo.itemDataFive,
  ];

  const activeGallery = galleries[activeGalleryIndex];

  const handleOpenModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  const handleNextImage = () => {
    setSelectedImageIndex(prev => (prev + 1) % activeGallery.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex(prev =>
      prev === 0 ? activeGallery.length - 1 : prev - 1,
    );
  };

  const handleNextGallery = () => {
    setGalleryOpacity(0);
    setTimeout(() => {
      setActiveGalleryIndex(prev => (prev + 1) % galleries.length);
      setGalleryOpacity(1);
    }, 300);
  };

  const handlePrevGallery = () => {
    setGalleryOpacity(0);
    setTimeout(() => {
      setActiveGalleryIndex(prev =>
        prev === 0 ? galleries.length - 1 : prev - 1,
      );
      setGalleryOpacity(1);
    }, 300);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
  });

  return (
    <section className="projects-section" id="projekty">
      <h2
        ref={titleRef}
        className={`projects-title reveal ${titleVisible ? 'is-visible' : ''}`}
      >
        Naše projekty
      </h2>
      <div
        ref={galleryRef}
        className={`gallery-slider reveal ${galleryVisible ? 'is-visible' : ''}`}
      >
        <IconButton
          className="gallery-arrow gallery-arrow-left"
          onClick={handlePrevGallery}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
        <div
          className="gallery-content"
          style={{ opacity: galleryOpacity, transition: 'opacity 0.3s ease' }}
        >
          <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={cols}
            rowHeight={cols === 1 ? 160 : 121}
          >
            {activeGallery.map((item, index) => (
              <ImageListItem
                key={item.img}
                cols={Math.min(item.cols || 1, cols)}
                rows={item.rows || 1}
                onClick={() => handleOpenModal(index)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={toThumbWebp(item.img)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <IconButton
          className="gallery-arrow gallery-arrow-right"
          onClick={handleNextGallery}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </div>

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-image"
      >
        <Box sx={modalStyle} className="modal-container" {...swipeHandlers}>
          <img
            src={activeGallery[selectedImageIndex].img}
            alt={activeGallery[selectedImageIndex].title}
            className="modal-image"
          />
          <IconButton
            className="modal-arrow modal-arrow-left"
            onClick={handlePrevImage}
          >
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <IconButton
            className="modal-arrow modal-arrow-right"
            onClick={handleNextImage}
          >
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Modal>
    </section>
  );
};

export default ProjectsSection;

const photo = {
  itemData: [
    {
      img: 'images/5260274965897407991.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5260274965897407992.webp',
      title: 'Work',
    },
    {
      img: 'images/5260274965897408017.webp',
      title: 'Work',
    },
    {
      img: 'images/5260274965897408019.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170184.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170186.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170188.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170190.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170193.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170192.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170194.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170195.webp',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataTwo: [
    {
      img: 'images/5262979313530170196.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170197.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170199.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170200.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170201.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170204.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170208.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170211.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170213.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170215.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170216.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170217.webp',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataThry: [
    {
      img: 'images/5262979313530170219.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170220.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170222.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170221.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170224.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170225.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170226.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170227.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170228.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170230.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170231.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170243.webp',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataFour: [
    {
      img: 'images/5262979313530170246.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170247.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170248.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170251.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5264915952938642805.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5265231113343856054.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5265231113343856055.webp',
      title: 'Work',
    },
    {
      img: 'images/5265231113343856056.webp',
      title: 'Work',
    },
    {
      img: 'images/5265231113343856057.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5265231113343856059.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170231.webp',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170243.webp',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataFive: [
    {
      img: 'images/5292033994193497955.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497956.webp',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497957.webp',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497958.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5292033994193497959.webp',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5292033994193497960.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497961.webp',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497962.webp',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497963.webp',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497964.webp',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497965.webp',
      title: 'Work',
    },
    {
      img: 'images/5293989625947351883.webp',
      title: 'Work',
      cols: 2,
    },
  ],
};
