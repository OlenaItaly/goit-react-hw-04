import css from "./ImageCard.module.css"

export default function ImageCard({ imgLink, imgSlug,imgModal, onClick }) {
   const handleClick = () => {
     // 
     onClick(imgModal);
    }
    return (
      <div className={css.thumb}>
        <img onClick={handleClick} src={imgLink} alt={imgSlug} loading="lazy" />
      </div>
    );
}