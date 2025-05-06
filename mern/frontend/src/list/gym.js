import {create} from "zustand";

export const addGym = async (gymInfo) => {
    const res = await fetch(`/api/gym`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gymInfo),
    });

    const data = await res.json();
    if (!res.ok) {
        return { success: false, message: data.message };
    }
    return {success:true, message:"Gym Added Successfully."}    
}

export const updateGym = async (gymId, gymInfo) => {
    console.log("gym info:", gymInfo)
    const res = await fetch(`/api/gym/${gymId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gymInfo),
    });

    const data = await res.json();
    if (!res.ok) {
        return { success: false, message: data.message };
    }
    return {success:true, message:"Gym Updated Successfully."}    
}

export const deleteGym = async (gym_id) => {
    const res = await fetch(`/api/gym/${gym_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    if (!res.ok) {
        return { success: false, message: data.message };
    }
    return {success:true, message:"Gym Deleted Successfully."}    
}

export const searchGyms = async (query) => {
    const res = await fetch(`/api/gym/search${query}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    if (!res.ok) {
        return { success: false, message: data.message };
    }

    return { success: true, data: data.data };    
}