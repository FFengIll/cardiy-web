import React, { useState, useEffect } from 'react';
import Canvas from './Canvas';

interface Page {
  imageUrl: string;
  pageNumber: number;
  content: string;
}

const PagePreview: React.FC = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // assuming total pages is 5 for this example

  // Fetch images when component mounts
  useEffect(() => {
    // Replace this with your actual API endpoint
    const fetchImages = async () => {
      try {
        // // Assuming the API returns a list of image URLs
        // const response = await fetch('https://api.example.com/images');
        // const data = await response.json();

        // // Assuming the API returns an array of objects with image URL and page info
        // const imagePages = data.slice(0, 3).map((item: any, index: number) => ({
        //   imageUrl: item.url,  // Make sure this matches the actual data structure
        //   pageNumber: currentPage + index,
        //   content: `Content for page ${currentPage + index}`,
        // }));

        const url = "https://picsum.photos/200/300"
        const imagePages = [
          {
            imageUrl: url,  // Make sure this matches the actual data structure
            pageNumber: currentPage,
            content: `Content for page ${currentPage + 1}`,
          },
          {
            imageUrl: url,  // Make sure this matches the actual data structure
            pageNumber: currentPage,
            content: `Content for page ${currentPage + 1}`,
          },

        ]

        setPages(imagePages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [currentPage]);

  return (
    <div>
      {/* Page Preview */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {pages.map((page) => (
          <div key={page.pageNumber} style={{ width: '30%', border: '1px solid #ccc', padding: '10px' }}>
            <h3>Page {page.pageNumber <= totalPages ? page.pageNumber : currentPage}</h3>
            <p>{page.content}</p>
            <img src={page.imageUrl} alt={`Page ${page.pageNumber}`} style={{ width: '100%' }} />
          </div>
        ))}
        <div key="result" style={{ width: '30%', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Page </h3>
          <p></p>
          <Canvas imageSrc="https://picsum.photos/200/300" texts={[]} onExport={(im) => { console.log(im) }} ></Canvas>
        </div>
      </div>
    </div>
  );
};

export default PagePreview;
