import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {   
};

function getRandomColor(){
    const color_List =['red','yellow','blue','green','black'];
    let randomNumber= Math.trunc(Math.random()*5);
    return color_List[randomNumber];    
}
// ---------------------------------------------------------------
function ColorBox() {
   const [color, setcolor] = useState(()=>{
    const initColor= localStorage.getItem('old-color')||'pink';
    return initColor;
   });
   function onClickBox(){
    const newColor= getRandomColor();
    setcolor(newColor);
    localStorage.setItem('old-color',newColor);
 }
    return (
        <div className='color-box' style={{background:color}} onClick={onClickBox}>   
        
           
        </div>
    );
}

export default ColorBox;


