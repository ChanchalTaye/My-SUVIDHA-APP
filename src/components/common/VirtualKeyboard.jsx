import React, { useState } from 'react';
import './VirtualKeyboard.css';

const VirtualKeyboard = ({ isVisible, onClose, onKeyPress, onDelete, defaultLayout = 'numeric' }) => {
    const [layout, setLayout] = useState(defaultLayout);
    const [isShift, setIsShift] = useState(false);

    React.useEffect(() => {
        if (isVisible) {
            setLayout(defaultLayout);
            setIsShift(false);
        }
    }, [isVisible, defaultLayout]);

    if (!isVisible) return null;

    // const numericKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

    const getDisplayKey = (key) => isShift ? key.toUpperCase() : key;

    const handleKeyClick = (key) => {
        onKeyPress(getDisplayKey(key));
    };

    return (
        <div className="virtual-keyboard-overlay">
            <div className="virtual-keyboard-container">
                <div className="vk-header">
                    <div className="vk-toggle">
                        <button
                            className={`vk-toggle-btn ${layout === 'numeric' ? 'active' : ''}`}
                            onClick={() => setLayout('numeric')}
                        >
                            123
                        </button>
                        <button
                            className={`vk-toggle-btn ${layout === 'alpha' ? 'active' : ''}`}
                            onClick={() => setLayout('alpha')}
                        >
                            ABC
                        </button>
                    </div>
                    <button className="vk-close-btn" onClick={onClose}>Done</button>
                </div>

                <div className="vk-keys-grid">
                    {layout === 'numeric' ? (
                        <div className="vk-numeric-grid">
                            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(key => (
                                <button key={key} className="vk-key" onClick={() => handleKeyClick(key)}>
                                    {key}
                                </button>
                            ))}
                            <div className="vk-key-placeholder"></div>
                            <button className="vk-key" onClick={() => handleKeyClick('0')}>0</button>
                            <button className="vk-key vk-action-key" onClick={onDelete}>⌫</button>
                        </div>
                    ) : (
                        <div className="vk-alpha-container">
                            <div className="vk-row">
                                {row1.map(key => (
                                    <button key={key} className="vk-key" onClick={() => handleKeyClick(key)}>
                                        {getDisplayKey(key)}
                                    </button>
                                ))}
                            </div>
                            <div className="vk-row">
                                {row2.map(key => (
                                    <button key={key} className="vk-key" onClick={() => handleKeyClick(key)}>
                                        {getDisplayKey(key)}
                                    </button>
                                ))}
                            </div>
                            <div className="vk-row">
                                <button
                                    className={`vk-key vk-shift-key ${isShift ? 'active' : ''}`}
                                    onClick={() => setIsShift(!isShift)}
                                >
                                    ⇧
                                </button>
                                {row3.map(key => (
                                    <button key={key} className="vk-key" onClick={() => handleKeyClick(key)}>
                                        {getDisplayKey(key)}
                                    </button>
                                ))}
                                <button className="vk-key vk-action-key" onClick={onDelete}>⌫</button>
                            </div>
                            <div className="vk-row bottom">
                                <button className="vk-key vk-space-key" onClick={() => handleKeyClick(' ')}>Space</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VirtualKeyboard;
