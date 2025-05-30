import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './portfolio.css';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
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
      <h2 className="projects-title">Naše projekty</h2>
      <div className="gallery-slider">
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
            cols={4}
            rowHeight={121}
          >
            {activeGallery.map((item, index) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
                onClick={() => handleOpenModal(index)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
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
      img: 'images/5260274965897407991.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5260274965897407992.jpg',
      title: 'Work',
    },
    {
      img: 'images/5260274965897408017.jpg',
      title: 'Work',
    },
    {
      img: 'images/5260274965897408019.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170184.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170186.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170188.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170190.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170193.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170192.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170194.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170195.jpg',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataTwo: [
    {
      img: 'images/5262979313530170196.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170197.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170199.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170200.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170201.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170204.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170208.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170211.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170213.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170215.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170216.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170217.jpg',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataThry: [
    {
      img: 'images/5262979313530170219.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170220.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170222.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170221.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170224.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5262979313530170225.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170226.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170227.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170228.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170230.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170231.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170243.jpg',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataFour: [
    {
      img: 'images/5262979313530170246.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5262979313530170247.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170248.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170251.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5264915952938642805.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5265231113343856054.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5265231113343856055.jpg',
      title: 'Work',
    },
    {
      img: 'images/5265231113343856056.jpg',
      title: 'Work',
    },
    {
      img: 'images/5265231113343856057.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5265231113343856059.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170231.jpg',
      title: 'Work',
    },
    {
      img: 'images/5262979313530170243.jpg',
      title: 'Work',
      cols: 2,
    },
  ],
  itemDataFive: [
    {
      img: 'images/5292033994193497955.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497956.jpg',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497957.jpg',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497958.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5292033994193497959.jpg',
      title: 'Work',
      cols: 2,
    },
    {
      img: 'images/5292033994193497960.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497961.jpg',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497962.jpg',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497963.jpg',
      title: 'Work',
      rows: 2,
      cols: 2,
    },
    {
      img: 'images/5292033994193497964.jpg',
      title: 'Work',
    },
    {
      img: 'images/5292033994193497965.jpg',
      title: 'Work',
    },
    {
      img: 'images/5293989625947351883.jpg',
      title: 'Work',
      cols: 2,
    },
  ],
};
