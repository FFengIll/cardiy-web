import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PagePreview from './PagePreview';
import Canvas from './Canvas';

const Trans = () => {
  const [viewMode, setViewMode] = useState('list');
  const [currentPage, setCurrentPage] = useState(1);

  // Sample YAML content
  const yamlCode = `
  ---
  title: "My Document"
  pages:
    - page: 1
      content: "Page 1 content"
    - page: 2
      content: "Page 2 content"
    - page: 3
      content: "Page 3 content"
  `;

  const totalPages = 3;

  const handleToolbarClick = (action) => {
    if (action === 'open') {
      alert('Open functionality');
    } else if (action === 'list-view') {
      setViewMode('list');
    } else if (action === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (action === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

const texts= [
  { text: "Hello, World!", position: { x: 50, y: 50 } },
    { text: "This is a test.", position: { x: 150, y: 100 } },
    { text: "Canvas Export", position: { x: 200, y: 150 } }
]

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Toolbar */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => handleToolbarClick('open')}>Open</button>
        <button onClick={() => handleToolbarClick('list-view')}>List View</button>
        <div>
          <button onClick={() => handleToolbarClick('prev')}>Prev</button>
          <span style={{ margin: '0 10px' }}>{currentPage} / {totalPages}</span>
          <button onClick={() => handleToolbarClick('next')}>Next</button>
        </div>
      </div>

      {/* Page Preview */}
      <PagePreview></PagePreview>

      {/* <Canvas imageSrc="https://picsum.photos/200/300" texts={texts} onExport={(im)=>{ console.log(im)}} ></Canvas> */}

      {/* YAML Code View */}
      <div>
        <h3>YAML Code View</h3>
        {/* <SyntaxHighlighter language="yaml" style={docco}>
          {yamlCode}
        </SyntaxHighlighter> */}
      </div>
    </div>
  );
};

export default Trans;
