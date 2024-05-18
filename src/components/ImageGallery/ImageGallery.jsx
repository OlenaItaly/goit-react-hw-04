export default function ImageGallery({ items }) {
    return (
        <ul>
            {items.map((item) => (
                 <li key={item.id}>
                   <div>
                     <img src={item.url} alt="" />
                   </div>
                 </li>))
            }
           
        </ul>
    )
}