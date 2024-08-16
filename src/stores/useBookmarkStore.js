import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useBookmarkStore = create(
  persist(
    set => ({
      bookmarks: [],
      toggleBookmark: bookId =>
        set(state => {
          const isBookmarked = state.bookmarks.includes(bookId);
          return {
            bookmarks: isBookmarked
              ? state.bookmarks.filter(id => id !== bookId)
              : [...state.bookmarks, bookId],
          };
        }),
    }),
    {name: 'bookmarks-storage', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

export default useBookmarkStore;
