import {create} from "zustand"

export const useTrainerList = create((set) => ({
    trainers: [],
    setTrainers: (trainers) => set({ trainers }),
}));
