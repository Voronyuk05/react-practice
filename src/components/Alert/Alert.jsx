import s from './Alert.module.css'
import PropTypes from 'prop-types'

export const Alert = ({text, type}) => {
    return <p className={s[type]}>{text}</p>
}

Alert.propType = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'success', 'warning'])
}