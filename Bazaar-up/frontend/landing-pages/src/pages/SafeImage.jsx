// src/components/SafeImage.jsx
import React from 'react';
import fallback from '../assets/fallback.jpg';

export function SafeImage({ src, alt, ...props }) {
  const handleError = e => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallback;
  };

  return <img src={src || fallback} alt={alt} onError={handleError} {...props} />;
}
