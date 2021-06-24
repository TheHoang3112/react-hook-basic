import React, { useState } from 'react';
import '../Components/ColorBox.scss';

function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('remember_color') || 'red';
        console.log(initColor);
        return initColor;
    });
    const randomColor = () => {
        const color = ['red', 'yellow', 'blue', 'black', 'pink'];
        const indexColor = Math.trunc(Math.random() * 5);
        return color[indexColor];
    }
    const handleClick = () => {
        const newColor = randomColor();
        setColor(newColor);
        localStorage.setItem('remember_color', newColor);
    }
    return (
        <div className='box'
            style={{
                backgroundColor: color
            }}
            onClick={handleClick}
        >
            Color BOX
        </div>
    );
}

export default ColorBox;