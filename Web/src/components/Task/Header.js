import React from 'react'
import Button from './Button'

const Header = ({onClick,showAddTask}) => {
    return (
        <header className='header'>
            <h1>Welcome </h1>
            { <Button color={showAddTask ? 'red': 'green'}
             text={showAddTask ?'Close':'Add'} 
                onClick={onClick} />}
       </header>
    );
}

export default Header;