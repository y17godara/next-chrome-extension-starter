import React, { useState } from 'react';

export default function Home() {
  const [activePage, setActivePage] = useState('index');

  const navigateToPage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      {activePage === 'index' && (
        <div>
          <h1>Home</h1>
          <button onClick={() => navigateToPage('new')}>New</button>
        </div>
      )}
      {activePage === 'new' && (
        <div>
          <h1>New</h1>
          <button onClick={() => navigateToPage('index')}>Home</button>
        </div>
      )}
    </>
  );
}
