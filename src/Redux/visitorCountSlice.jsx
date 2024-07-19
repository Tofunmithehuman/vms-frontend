import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchVisitorCount = createAsyncThunk(
  "visitorCount/fetch",
  async (date) => {
    const response = await axios.get(`/visitor-count/${date}`);
    return response.data.count;
  }
);

export const updateVisitorCount = createAsyncThunk(
  "visitorCount/update",
  async ({ date, count }) => {
    const response = await axios.put(`/visitor-count/${date}`, { count });
    return response.data.count;
  }
);

const visitorCountSlice = createSlice({
  name: "visitorCount",
  initialState: {
    count: parseInt(localStorage.getItem("visitorCount")) || 0,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVisitorCount.fulfilled, (state, action) => {
        state.count = action.payload;
        state.status = "succeeded";
        localStorage.setItem("visitorCount", action.payload.toString());
      })
      .addCase(updateVisitorCount.fulfilled, (state, action) => {
        state.count = action.payload;
        localStorage.setItem("visitorCount", action.payload.toString());
      });
  },
});

export default visitorCountSlice.reducer;
