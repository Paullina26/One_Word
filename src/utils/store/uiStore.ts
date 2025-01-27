import { UIState } from '@utils/types/typesStore';
import { create } from 'zustand';

export const useUIStore = create<UIState>(set => ({
  isOpenMenu: false,
  isLoadingOpen: false,
  isErrorOpen: false,

  setIsOpenMenu: isOpen => set({ isOpenMenu: isOpen }),
  setIsLoadingOpen: isLoading => set({ isLoadingOpen: isLoading }),
  setIsErrorOpen: isError => set({ isErrorOpen: isError }),
}));
