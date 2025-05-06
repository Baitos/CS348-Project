import {create} from "zustand";

export const makeTrainer = create((set) => ({
    trainers: [],
    setTrainers: (trainers) => set({ trainers }),
    createTrainer: async (newTrainer) => {
        if (!newTrainer.username || !newTrainer.password || !newTrainer.level || !newTrainer.team) { 
            return {success:false, message:"Please fill in all fields."}
        }
        if (!["instinct", "valor", "mystic"].includes((newTrainer.team).toLowerCase())) {
            return {success:false, message:"Please type a valid team."}
        }
        const res = await fetch("/api/trainer", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newTrainer)
        })
        const data = await res.json();
        if (!res.ok) {
            return { success: false, message: data.message };
        }
        set((state) => ({trainers:[...state.trainers, data.data]}))
        return {success:true, message:"New Account Created."}
    },
}));

export const useUpdateTrainer = create((set) => ({
    trainers: [],
    setTrainers: (trainers) => set({ trainers }),

    updateTrainer: async (id, newTrainer) => {
        if (!["instinct", "valor", "mystic"].includes((newTrainer.team).toLowerCase())) {
            return {success:false, message:"Please type a valid team."}
        }
        const res = await fetch(`/api/trainer/${id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newTrainer)
        })

        const data = await res.json();
        if (!res.ok) {
            return { success: false, message: data.message };
        }
        set((state) => ({
            trainers: state.trainers.map(t => t.id === id ? data.data : t)
        }))
        return {success:true, message:"Trainer Updated Successfully."}
    },
}));

export const deleteTrainer = async (id) => {
    const res = await fetch(`/api/trainer/${id}`, {
        method:"DELETE",
    });

    const data = await res.json();
    if (!res.ok) {
        return { success: false, message: data.message };
    }
    return {success:true, message:"Trainer Deleted Successfully."}
};