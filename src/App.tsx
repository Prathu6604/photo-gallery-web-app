import React, { useReducer, useEffect, useState, useMemo, useCallback } from 'react';
import { useFetchPhotos, Photo } from './hooks/useFetchPhotos';
import { favouritesReducer, FavouritesState, loadFavouritesFromStorage, saveFavouritesToStorage } from './reducers/favouritesReducer';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchQuery, setSearchQuery] = useState('');

  const [favouritesState, dispatch] = useReducer(favouritesReducer, { favourites: [] });

  useEffect(() => {
    const favourites = loadFavouritesFromStorage();
    dispatch({ type: 'LOAD', favourites });
  }, []);

  useEffect(() => {
    saveFavouritesToStorage(favouritesState.favourites);
  }, [favouritesState.favourites]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [photos, searchQuery]);

  const toggleFavourite = (id: string) => {
    if (favouritesState.favourites.includes(id)) {
      dispatch({ type: 'REMOVE', id });
    } else {
      dispatch({ type: 'ADD', id });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by author..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo: Photo) => (
          <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={photo.download_url}
              alt={`Photo by ${photo.author}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">{photo.author}</p>
              <button
                onClick={() => toggleFavourite(photo.id)}
                className="text-2xl focus:outline-none"
              >
                {favouritesState.favourites.includes(photo.id) ? '♥' : '♡'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;