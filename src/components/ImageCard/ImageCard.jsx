import css from "./ImageCard.module.css"

export default function ImageCard({ imgLink, imgSlug }) {
    return (
      <div className={css.thumb}>
        <img src={imgLink} alt={imgSlug} />
      </div>
    );
}