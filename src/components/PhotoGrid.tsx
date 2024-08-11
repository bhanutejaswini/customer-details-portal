import React, { useState, useEffect } from "react";

interface Photo {
  id: string;
  largeImageURL: string;
  user: string;
}

const PhotoGrid: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchPhotos = async () => {
    try {
      if (!apiKey) {
        throw new Error("API key is not defined");
      }
      setIsLoading(true);
      const pageNumber = Math.floor(Math.random() * 10) + 1;
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&page=${pageNumber}&per_page=9`
      );
      const json = await response.json();
      setPhotos(json.hits);
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
    const interval = setInterval(() => {
      fetchPhotos();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return isLoading ? (
    <h3>Loading Photos...</h3>
  ) : (
    <div className="photo-grid">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.largeImageURL}
          alt={`By ${photo.user}`}
          width="200"
          height="200"
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
