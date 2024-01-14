import React, { useState, useEffect } from "react";
import './styles/Card.css';

interface CardProps {
  search: string;
}

interface Heart {
  heart: (id:number) => void
}

const Card: React.FC<CardProps> = ({ search }) => {
  type Prod = {
    id: number,
    title: string,
    img: string,
    price: number
  }
  const ITEMS_PER_PAGE = 2; // Количество элементов на странице
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState('');
  const [items, setItems] = useState<Prod[]>([]);
  const [wishlist, setWishlist] = useState(false)

  const heart = () =>  {
    setWishlist(!wishlist)
    console.log(wishlist)
  }
  useEffect(() => {
    fetch("https://61f50a3162f1e300173c3fbf.mockapi.io/cars")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  // Фильтрация и пагинация
  const filteredItems = items.filter((f) => f.title.toLowerCase().includes(value.toLowerCase()));
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <div className="container">
      <div className="main">
        <div className="main-header"> 
          <h1 className="title-shop">items</h1>
          <input className="inputSearch" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>       
        <main className="main bd-grid">
          {currentItems.map((t) => (
            <article key={t.id} className="card">
              <div className="card__img">
                <img src={t.img} alt={t.title} />
              </div>
              <div className="card__name">
                <p>{t.title}</p>
              </div>
              <div className="card__precis">
                <div onClick={heart}  className={`card__icon ${wishlist ? 'card__icon_active' : ''}`}><i className="fa fa-heart"></i></div>
                <div>
                  <span className="card__preci card__preci--before">$990.00</span>
                  <span className="card__preci card__preci--now">${t.price}</span>
                </div>
                <div className="card__icon"><i className="fa fa-shopping-cart"></i></div>
              </div>
            </article>
          ))}
        </main>
        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
