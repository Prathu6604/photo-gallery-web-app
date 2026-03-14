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
        // Static photos related to Maharashtra culture using Picsum
        const maharashtraPhotos: Photo[] = [
          {
            id: '1',
            author: 'Maharashtra Culture - Ganesh Festival',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/1/800/600',
            download_url: 'https://picsum.photos/id/1/800/600'
          },
          {
            id: '2',
            author: 'Maharashtra Culture - Kolhapur Temple',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/2/800/600',
            download_url: 'https://picsum.photos/id/2/800/600'
          },
          {
            id: '3',
            author: 'Maharashtra Culture - Warli Painting',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/3/800/600',
            download_url: 'https://picsum.photos/id/3/800/600'
          },
          {
            id: '4',
            author: 'Maharashtra Culture - Lavani Dance',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/4/800/600',
            download_url: 'https://picsum.photos/id/4/800/600'
          },
          {
            id: '5',
            author: 'Maharashtra Culture - Ajanta Caves',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/5/800/600',
            download_url: 'https://picsum.photos/id/5/800/600'
          },
          {
            id: '6',
            author: 'Maharashtra Culture - Maharashtrian Cuisine',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/6/800/600',
            download_url: 'https://picsum.photos/id/6/800/600'
          },
          {
            id: '7',
            author: 'Maharashtra Culture - Elephanta Caves',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/7/800/600',
            download_url: 'https://picsum.photos/id/7/800/600'
          },
          {
            id: '8',
            author: 'Maharashtra Culture - Dhol Tasha',
            width: 800,
            height: 600,
            url: 'https://picsum.photos/id/8/800/600',
            download_url: 'https://picsum.photos/id/8/800/600'
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