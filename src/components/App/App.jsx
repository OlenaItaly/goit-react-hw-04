import { useEffect, useState } from "react";
import css from "./App.module.css"
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImages } from "../images_api";

import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
     const [searchQuery, setSearchQuery] = useState("");
  const [totalImages, setTotalImages] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImg, setModalImg] = useState("");
    
    useEffect(() => {
        if (searchQuery === "") {
            return;
        }
        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await getImages(searchQuery, page);
             
                setImages((prevState) => [...prevState, ...data.results]);
                setTotalImages(data.total);
              
            } catch (error) {
              
                setIsError(true); 
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchImages();
            
    }, [page, searchQuery]);


    const handleSearch = async (topic) => {
    setSearchQuery(topic);
    setPage(1);
        setImages([]);
         setTotalImages(0);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };


   const openModal = (photo) => {
     setModalIsOpen(true);
     setModalImg(photo);
    
   };

   const closeModal = () => {
     setModalIsOpen(false);
   };
//   


    return (
      <div className={css.container}>
        <header className={css.header}>
          <SearchBar onSearch={handleSearch} />
          {isError && <ErrorMessage />}
        </header>
        <section className={css.section}>
          {isLoading && <p>Loading image, please await...</p>}
          {images.length > 0 && (
            <ImageGallery items={images} onImageClick={openModal} />
          )}
          {images.length < totalImages && !isLoading && (
            <button className={css.btnLoadMore} onClick={handleLoadMore}>Load more</button>
          )}
          {modalIsOpen && (
            <ImageModal
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              photo={modalImg}
            />
          )}
        </section>
      </div>
    );
}