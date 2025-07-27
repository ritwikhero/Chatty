import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
      toast.success("Users fetched successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in getUsers:", error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
      toast.success("Messages fetched successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in getMessages:", error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  //todo optimise it later

  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
