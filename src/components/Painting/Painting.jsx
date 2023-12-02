import PropTypes from 'prop-types'
export function Painting({title, url, quantity, price, author}) {
    return(
        <li>
            <img src={url} alt="" width="480" />
            <h2>{title}</h2>
            <p>Автор: <a href={author.url}>{author.tag}</a></p>
            <p>Ціна: {price} грн</p>
            <p>Доступність: {quantity < 5 ? 'закінчується' : `є в наявності ${quantity}`}</p>
            <button type="button">Додати в кошик</button>
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