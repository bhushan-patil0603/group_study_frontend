import React, { useState } from 'react';
import Board from '../board/Board';

import './style.css';

const Container = () => {
    const [color, setColor] = useState("#000000"); // State for brush color
    const [size, setSize] = useState("5"); // State for brush size

    const changeColor = (event) => {
        setColor(event.target.value); // Update brush color
    };

    const changeSize = (event) => {
        setSize(event.target.value); // Update brush size
    };

    return (
        <div className="container">
            <div className="tools-section">
                <div className="color-picker-container">
                    Select Brush Color: &nbsp;
                    <input 
                        type="color" 
                        value={color} 
                        onChange={changeColor} 
                    />
                </div>

                <div className="brushsize-container">
                    Select Brush Size: &nbsp;
                    <select value={size} onChange={changeSize}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                    </select>
                </div>
            </div>

            <div className="board-container">
                <Board color={color} size={size}></Board>
            </div>
        </div>
    );
};

export default Container;
