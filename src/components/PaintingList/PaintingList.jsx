import PropTypes from 'prop-types'
import { Painting } from "../Painting/Painting.jsx"
import s from './PaintingList.module.css'
import { Component } from 'react'

export class PaintingList extends Component  {
    render() {
        return (
            <ul className={s.list} >
                {this.props.painting.map(({id, title, url, quantity, price, author}) => (
                    <Painting 
                        key={id}
                        url={url}
                        title={title}
                        price={price}
                        quantity={quantity}
                        author={author}
                    />
                ))}
            </ul>
        )
    }
}

// export function PaintingList ({painting}) {
//     return (
//         <ul className={s.list} >
//             {painting.map(({id, title, url, quantity, price, author}) => (
//                 <Painting 
//                     key={id}
//                     url={url}
//                     title={title}
//                     price={price}
//                     quantity={quantity}
//                     author={author}
//                 />
//             ))}
//         </ul>
//     )
// }

// PaintingList.propTypes = {
//     painting: PropTypes.array,
// }