import React from 'react';
import { useEffect } from 'react';


export default function Home() {
  useEffect(()=>{
    document.title += " | Home"
  },['title'])
  return (
    <div className="App">
      <header className="App-header">
    </header>
    </div>
  );
}

