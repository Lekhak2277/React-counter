import React from 'react';
import '../Counter.css'


function Header()
{
    return(
        <>
        <div className = "main-header">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Counter</li>
            </ul>

        </div>
        </>
    );
}

export default Header;