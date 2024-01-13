import PropTypes from 'prop-types'
import s from './Painting.module.css'

export function Painting({title, url, quantity, price, author}) {
    return(
        <li className={s.listItem}>
            <img className={s.listItem_img} src={url} alt="" width="480" />
            <h2 className={s.listItem_title} >{title}</h2>
            <p className={s.listItem_text} >Автор: <a href={author.url} className={s.listItem_link}>{author.tag}</a></p>
            <p className={s.listItem_text}>Ціна: <span className={s.listItem_price}>{price}</span> грн</p>
            <p className={s.listItem_text}>Доступність: <span className={s.listItem_quantity} >{quantity < 5 ? 'закінчується' : `є в наявності ${quantity}`}</span></p>
            <button className={s.listItem_button} type="button">Додати в кошик</button>
        </li>
    )
}

Painting.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    author: PropTypes.object,
}