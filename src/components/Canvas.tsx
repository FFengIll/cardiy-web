import React, { useEffect, useRef, useState } from "react";

interface TextItem {
  text: string;        // Text content
  position: { x: number; y: number }; // Position in the original image coordinates
}

interface CanvasProps {
  imageSrc: string;           // Image source URL
  texts: TextItem[];          // Array of text items to be drawn
  onExport: (imageDataUrl: string) => void; // Callback for exporting image
}

const Canvas: React.FC<CanvasProps> = ({ imageSrc, texts, onExport }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Ensure CORS is set
    img.src = imageSrc;
    img.onload = () => {
      setImage(img);
    };
  }, [imageSrc]);

  useEffect(() => {
    if (image && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set the canvas size to match the image's original size
      canvas.width = image.width;
      canvas.height = image.height;

      // Clear any previous drawings
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image to the canvas at its original size
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Draw the texts, scaling their positions based on canvas size
      ctx.font = "30px Arial";  // Set font size
      ctx.fillStyle = "red";    // Set text color

      texts.forEach(({ text, position }) => {
        // Draw each text with position adjusted for the image size
        ctx.fillText(text, position.x, position.y);
      });
    }
  }, [image, texts]);

  const handleExport = () => {
    if (canvasRef.current) {
      const imageDataUrl = canvasRef.current.toDataURL("image/png"); // Export as PNG
      onExport(imageDataUrl); // Callback with the image data URL
    }
  };

  return (
    <div>
      <button onClick={handleExport}>Export Image</button>
      <br></br>
      <canvas ref={canvasRef}>
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
};

export default Canvas;
