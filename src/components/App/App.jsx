import { useEffect, useState } from "react";
import css from "./App.module.css"
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { getImages } from "../images_api";



export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
     const [searchQuery, setSearchQuery] = useState("");
    
    useEffect(() => {
        if (searchQuery === "") {
            return;
        }
        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await getImages(searchQuery, page);
           
                setImages((prevState) => [...prevState, ...data]);
            } catch (error) {
                console.log("error");
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
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

    return (
      <div className={css.container}>
        <header>
          <SearchBar onSearch={handleSearch} />
          {isError && <p>Oops! There was an error! Try again!</p>}
        </header>
        <section>
                {images.length > 0 && <ImageGallery items={images} />}
                {images.length > 0 && !isLoading && (
                    <button onClick={handleLoadMore}>Load more</button>
                )}
        </section>
      </div>
    );
}