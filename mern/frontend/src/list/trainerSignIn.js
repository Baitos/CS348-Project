import {create} from "zustand";
import {persist} from "zustand/middleware"

export const signInTrainer = create(
    persist(
        (set) => ({
            trainers: [],
            currentTrainer: null,
            setTrainers: (trainers) => set({ trainers }),
            setCurrentTrainer: (trainer) => set({ currentTrainer: trainer }),
            createTrainer: async (newTrainer) => {
                if (!newTrainer.username || !newTrainer.password) { 
                    return {success:false, message:"Please fill in all fields."}
                }
                const res = await fetch("/api/trainer/login", {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify(newTrainer)
                });
                const data = await res.json();
                if (!res.ok) {
                    return { success: false, message: data.message };
                }
                set((state) => ({
                    trainers:[...state.trainers, data.data],
                    currentTrainer: data.trainer,
                })
            );
            return {success:true, message:"Account Sign In Successful."};
        },

        logOut: () => {
            set({currentTrainer: null});
        },
    }),
    {
        name: "trainer-storage",
        getStorage: () => localStorage,
    }
    )
);
