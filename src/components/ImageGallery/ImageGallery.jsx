import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
 
    return (
      <ul className={css.list}>
        {items.map(({ id, urls, slug }) => (
          <li key={id}>
            <ImageCard
              imgLink={urls.small}
              imgModal={urls.regular}
              imgSlug={slug}
              onClick={onImageClick}
            />
          </li>
        ))}
      </ul>
    );
}