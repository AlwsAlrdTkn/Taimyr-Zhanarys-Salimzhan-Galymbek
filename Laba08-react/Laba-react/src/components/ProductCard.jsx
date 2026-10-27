function ProductCard({ product, onAdd, featured }) {
   return (
    <article className={featured ? 'card card--featured' : 'card'}>
      {featured && <span className="badge">Товар недели</span>}
      <img src="https://avatars.mds.yandex.net/i?id=e41808e82c06e7c14952e906fa0f17e4_sr-12714643-images-thumbs&n=13" alt="приплыли"></img>
      {/* используйте product.image и product.name (для alt) */}
 
      <h3>{product.name}</h3>
      <p>{product.price} тг</p>
      <button>В корзину</button>
    </article>
    );
}
 
export default ProductCard;
