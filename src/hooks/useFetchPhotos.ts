import { useState, useEffect } from 'react';

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Static photos related to Maharashtra culture
        const maharashtraPhotos: Photo[] = [
          {
            id: '1',
            author: 'Maharashtra Culture - Ganesh Festival',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ganesh_Chaturthi_2011.jpg/800px-Ganesh_Chaturthi_2011.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ganesh_Chaturthi_2011.jpg/800px-Ganesh_Chaturthi_2011.jpg'
          },
          {
            id: '2',
            author: 'Maharashtra Culture - Kolhapur Temple',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mahalakshmi_Temple_Kolhapur.jpg/800px-Mahalakshmi_Temple_Kolhapur.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mahalakshmi_Temple_Kolhapur.jpg/800px-Mahalakshmi_Temple_Kolhapur.jpg'
          },
          {
            id: '3',
            author: 'Maharashtra Culture - Warli Painting',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Warli_painting.jpg/800px-Warli_painting.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Warli_painting.jpg/800px-Warli_painting.jpg'
          },
          {
            id: '4',
            author: 'Maharashtra Culture - Lavani Dance',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lavani_dance.jpg/800px-Lavani_dance.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Lavani_dance.jpg/800px-Lavani_dance.jpg'
          },
          {
            id: '5',
            author: 'Maharashtra Culture - Ajanta Caves',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ajanta_Caves.jpg/800px-Ajanta_Caves.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ajanta_Caves.jpg/800px-Ajanta_Caves.jpg'
          },
          {
            id: '6',
            author: 'Maharashtra Culture - Maharashtrian Cuisine',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Maharashtrian_Thali.jpg/800px-Maharashtrian_Thali.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Maharashtrian_Thali.jpg/800px-Maharashtrian_Thali.jpg'
          },
          {
            id: '7',
            author: 'Maharashtra Culture - Elephanta Caves',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Elephanta_Caves.jpg/800px-Elephanta_Caves.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Elephanta_Caves.jpg/800px-Elephanta_Caves.jpg'
          },
          {
            id: '8',
            author: 'Maharashtra Culture - Dhol Tasha',
            width: 800,
            height: 600,
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dhol_Tasha.jpg/800px-Dhol_Tasha.jpg',
            download_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dhol_Tasha.jpg/800px-Dhol_Tasha.jpg'
          }
        ];
        setPhotos(maharashtraPhotos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};