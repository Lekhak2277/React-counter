import React, { useState } from 'react';
import '../Counter.css'

function Counter()
{   
    let count = 0;
    const [currentstate,updatestate]= useState(count);
    const clickhandler=()=>
        {
            updatestate(currentstate+1);
            // updatestate((prevCount)=>{prevCount+1});//THIS LINE ALSO WORKS THE SAME WAY AS ABOVE LINE BUT HERE WE ARE PASSING A FUNCTION INSTEAD OF currentstate VARIABLE
        };
    
    const resethandler =()=>
        {
            updatestate(currentstate=0);
        };
    const rightClickhandler=(rigthclickevent)=>
    {
        rigthclickevent.preventDefault();
        updatestate(0);
        //HERE PREVENT preventDefault() is a built in functio which is used prevent the right click function of opening the inspect and other functions window
    };
   
    return(
        <>
        <div className='counter-parent'>
            <div className='main-counter'>
                <h3>COUNTER</h3>
                <button onClick={clickhandler}
                onContextMenu={rightClickhandler}>{currentstate}</button>
                <p>Left click to increment currentstate</p>
                <p>Right click to set the current state back to 0</p>
                {/* <button onClick={()=>{updatestate(currentstate-1)

                }}>Decrement</button> */}


            </div>
        </div>
        </>
    );
}

export default Counter;