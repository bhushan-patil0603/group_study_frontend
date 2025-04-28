import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

import './style.css';

const Board = ({ color, size }) => {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const isDrawingRef = useRef(false);
    const timeoutRef = useRef(null);
    const socket = useRef(io.connect("http://localhost:5000")); //https://group-study-backend.onrender.com 
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;

        const sketch = document.querySelector('#sketch');
        const sketchStyle = getComputedStyle(sketch);
        canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
        canvas.height = parseInt(sketchStyle.getPropertyValue('height'));

        const mouse = { x: 0, y: 0 };
        const lastMouse = { x: 0, y: 0 };

        const handleMouseMove = (e) => {
            lastMouse.x = mouse.x;
            lastMouse.y = mouse.y;

            mouse.x = e.pageX - canvas.offsetLeft;
            mouse.y = e.pageY - canvas.offsetTop;
        };

        const handleMouseDown = () => {
            canvas.addEventListener('mousemove', onPaint);
        };

        const handleMouseUp = () => {
            canvas.removeEventListener('mousemove', onPaint);
        };

        const onPaint = () => {
            ctx.beginPath();
            ctx.moveTo(lastMouse.x, lastMouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                const base64ImageData = canvas.toDataURL("image/png");
                socket.current.emit("canvas-data", base64ImageData); // Emit the canvas data to backend
            }, 1000);
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const ctx = ctxRef.current;
        if (ctx) {
            ctx.strokeStyle = color;
            ctx.lineWidth = size;
        }
    }, [color, size]);

    useEffect(() => {
        const handleCanvasData = (data) => {
            if (isDrawingRef.current) return;

            isDrawingRef.current = true;

            const image = new Image();
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');

            image.onload = () => {
                ctx.drawImage(image, 0, 0);
                isDrawingRef.current = false;
            };

            image.src = data;
        };

        socket.current.on("canvas-data", handleCanvasData);

        return () => {
            socket.current.off("canvas-data", handleCanvasData);
        };
    }, []);

    return (
        <div className="sketch" id="sketch">
            <canvas className="board" id="board" ref={canvasRef}></canvas>
        </div>
    );
};

export default Board;
