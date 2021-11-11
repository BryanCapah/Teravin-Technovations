import PropTypes from 'prop-types';
export default function Button({ onClick, children }) {
    return (
        <button
            className='border-2 rounded-md bg-gray-400 px-3 py-1 text-white font-bold'
            onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any
}