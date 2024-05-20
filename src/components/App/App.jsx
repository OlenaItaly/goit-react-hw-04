import { useEffect, useState } from "react";
import css from "./App.module.css"
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImages } from "../images_api";
import toast from "react-hot-toast";


export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
     const [searchQuery, setSearchQuery] = useState("");
    const [totalImages, setTotalImages] = useState(0);
    
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
                toast.error(error.message);
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

    return (
      <div className={css.container}>
        <header className={css.header}>
          <SearchBar onSearch={handleSearch}/>
          {isError && <p>Oops! There was an error! Try again!</p>}
        </header>
        <section className={css.section}>
          {isLoading && <p>Loading image, please await...</p>}
          {images.length > 0 && <ImageGallery items={images} />}
          {images.length < totalImages && !isLoading && (
            <button onClick={handleLoadMore}>Load more</button>
          )}
        </section>
      </div>
    );
}