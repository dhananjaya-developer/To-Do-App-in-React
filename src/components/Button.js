 import propTypes from 'prop-types'

 const Button = ({color,text,onClick}) => {
    return (
        <button 
        onClick={onClick}
        className='btn'
         style={{backgroundColor:color}}>
             {text}
        </button>
    );
}

Button.defaultProps={
    color:'steelblue'
}

Button.prototype={
    text:propTypes.string,
    color: propTypes.string
}
export default Button
