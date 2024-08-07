import React from 'react';
import RandomNumberGame from './RandomNumberGame';

const PageLayout = () => {
  return (
    <div style={{ display: 'flex', padding: '20px', maxWidth: '1500px', margin: '0 auto' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <img 
          src={`${process.env.PUBLIC_URL}/공동관레이아웃.png`}
          alt="공동관 레이아웃" 
          style={{ width: '100%', marginBottom: '20px' }} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x300?text=공동관+레이아웃";
          }}
        />
        <img 
          src={`${process.env.PUBLIC_URL}/조감도.png`}
          alt="조감도" 
          style={{ width: '100%', marginBottom: '20px' }} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/400x300?text=조감도";
          }}
        />
      </div>
      <div style={{ flex: '1' }}>
        <RandomNumberGame />
      </div>
    </div>
  );
};

export default PageLayout;