import React, { useState } from 'react';
import '../components/ColorBox.scss'
import PropTypes from 'prop-types';

ColorBox.propTypes = {   
};

function getRandomColor(){
    const color_List =['red','yellow','blue','green','black'];
    let randomNumber= Math.trunc(Math.random()*5);
    return color_List[randomNumber];
}
function ColorBox() {
   const [color, setcolor] = useState('deeppink');
   function onClickBox(){
    const newColor= getRandomColor();
    setcolor(newColor);
 }
    return (
        <div className='color-box' style={{background:color}} onClick={onClickBox}>
            
        </div>
    );
}

export default ColorBox;


