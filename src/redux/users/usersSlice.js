import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [
    {
      id: 1,
      name: 'john',
      lastName: 'Doe',
    }
  ],
  isLoading: true,
  error: false,
};

const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    } catch(error) {
      return error;
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    })
  }
});

export { fetchUsers };
export const usersReducer = usersSlice.reducer;
