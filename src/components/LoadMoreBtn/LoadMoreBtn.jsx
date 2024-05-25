import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ onLoadMoreBtn }) {
  return (
    <div>
      <button className={css.btnLoadMore} onClick={onLoadMoreBtn}>
        Load more
      </button>
    </div>
  );
}