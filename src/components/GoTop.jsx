import React, { useState, useEffect } from 'react';

const GoTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scroll event check करने के लिए
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // ऊपर scroll करने का function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <button className=' animate-bounce'
                    onClick={scrollToTop}
                    style={{
                        width: '40px',
                        height: '40px',
                        position: 'fixed',
                        bottom: '50px',
                        right: '50px',
                        
                        fontSize: '18px',
                        backgroundColor: '#E70000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default GoTop;
