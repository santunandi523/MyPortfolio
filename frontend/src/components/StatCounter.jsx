import React, { useEffect, useState } from 'react';
export const StatCounter = ({ value, decimals = 0, prefix = '', suffix = '', duration = 1500, className = '', }) => {
    const [displayValue, setDisplayValue] = useState(0);
    useEffect(() => {
        let startTime = null;
        let animationFrameId;
        const animate = (timestamp) => {
            if (!startTime)
                startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(easedProgress * value);
            if (progress < 1) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };
        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [value, duration]);
    const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();
    return (<span className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>);
};
