import React from 'react';

const WhatsAppButton = (message) => {
    const phoneNumber = '254781934893'; // Replace with your number (with country code)
    // const message = 'Hello, I have a question!'; // Optional message
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Check if user is on mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Directly open WhatsApp app
      window.location.href = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      // Fallback for desktop/web
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    }


  return null
};

export default WhatsAppButton;