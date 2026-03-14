export interface FavouritesState {
  favourites: string[];
}

export type FavouritesAction =
  | { type: 'ADD'; id: string }
  | { type: 'REMOVE'; id: string }
  | { type: 'LOAD'; favourites: string[] };

export const favouritesReducer = (state: FavouritesState, action: FavouritesAction): FavouritesState => {
  switch (action.type) {
    case 'ADD':
      if (state.favourites.includes(action.id)) return state;
      return { favourites: [...state.favourites, action.id] };
    case 'REMOVE':
      return { favourites: state.favourites.filter(id => id !== action.id) };
    case 'LOAD':
      return { favourites: action.favourites };
    default:
      return state;
  }
};

export const loadFavouritesFromStorage = (): string[] => {
  const stored = localStorage.getItem('favourites');
  return stored ? JSON.parse(stored) : [];
};

export const saveFavouritesToStorage = (favourites: string[]) => {
  localStorage.setItem('favourites', JSON.stringify(favourites));
};