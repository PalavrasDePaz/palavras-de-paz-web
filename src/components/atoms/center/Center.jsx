import React from 'react';

// import { Container } from './styles';

function Center({ children }) {
  return (
    <div style={{ maxWidth: '1416px', margin: '0 auto' }}>
      {children}
    </div>
  );
}

export default Center;
