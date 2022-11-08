import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  users: [],
  usersStatus: "idle",
  usersError: null,
  user: null,
  userStatus: "idle",
  userError: null,
  loginStatus: "idle",
  registerStatus: "idle",
  removeStatus: "idle",
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await client.get("/users");
  return response.data;
});

export const fetchUserById = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await client.get(`/users/${id}`);
    return response.data;
  }
);

export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
  const response = await client.delete(`/users/${id}`);
  return response.data;
});

export const userLogin = createAsyncThunk("users/userLogin", async (email) => {
  const response = await client.get(`/users/search?q=${email}`);
  return response.data;
});

export const userRegister = createAsyncThunk(
  "users/userRegister",
  async (values) => {
    const response = await client.post("/users/add", values);
    return response.data;
  }
);

const login = () => {
  localStorage.setItem("isLoggedIn", true);
  window.location.reload();
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    editUser: (state, action) => {
      Object.entries(action.payload).forEach(([k, v]) => {
        state.user[k] = v;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.usersStatus = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersStatus = "succeeded";
      // Add any fetched users to the array
      state.users = action.payload.users;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.usersStatus = "failed";
      state.usersError = action.error.message;
    });
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.userStatus = "loading";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.userStatus = "succeeded";
      // Add any fetched users to the array
      state.user = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      state.userStatus = "failed";
      state.userError = action.error.message;
    });
    builder.addCase(userLogin.pending, (state, action) => {
      state.loginStatus = "loading";
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loginStatus = "succeeded";
      state.login = !!action.payload.users.length;
      login();
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loginStatus = "failed";
      state.loginError = action.error.message;
    });
    builder.addCase(userRegister.pending, (state, action) => {
      state.registerStatus = "loading";
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.registerStatus = "succeeded";
      state.users = [...state.users, action.payload];
      login();
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.registerStatus = "failed";
      state.registerError = action.error.message;
    });
    builder.addCase(removeUser.pending, (state, action) => {
      state.removeStatus = "loading";
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.removeStatus = "succeeded";
      window.location.href = "/users";
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.removeStatus = "failed";
      state.removeError = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const { editUser } = usersSlice.actions;

export default usersSlice.reducer;
