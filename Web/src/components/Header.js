import React from 'react'
import PropTypes from 'prop-types'
import Button from './Task/Button'

const Header = ({title,onClick,showAddTask,text}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            { <Button color={showAddTask ? 'red': 'green'}
            text={text}
                // text={showAddTask ?'Close':'Add'} 
                onClick={onClick} />}
       </header>
    );
}
Header.defaultProps ={
    title:'hh'
}
Header.propTypes ={
    title: PropTypes.string.isRequired
}

// //css
// const Headerstyles={
//     color:'red',
//     backgroundColor: 'black'
// }
export default Header;