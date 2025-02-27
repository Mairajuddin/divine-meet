import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { GET } from '../utilities/ApiProvider';
import Cookies from 'js-cookie';

// Basic Global State
const initialState = {};

// Function For Request Handling For State Update
export const fetchUserName = createAsyncThunk('fetchuser', async () => {
  const response = await GET(`https://jsonplaceholder.typicode.com/users`);
  return { name: response[Math.floor(Math.random() * 10)].name };
});

// State Updating Functions
const userReducer = createSlice({
  name: 'person',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      Cookies.set('user', JSON.stringify(action.payload));
    },
    loadUser: (state, action) => {
      state.value = action.payload;
    },
    // loadLocalStorage: (state, action) => {
    //     state.value = action.payload;
    //     localStorage.setItem('user', JSON.stringify(action.payload))
    // },
    // loadCookies: (state, action) => {
    //     state.value = action.payload;
    //     Cookies.set('user', JSON.stringify(action.payload))
    // },
    logout: (state, action) => {
      localStorage.clear();
      Cookies.remove('user');
      state.value = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserName.fulfilled, (state, action) => {
      state.value = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
      Cookies.set('user', JSON.stringify(action.payload));
    });
    builder.addMatcher(
      action => {
        return action.type.endsWith('/rejected');
      },
      (state, action) => {
        state.value = { name: 'Try Again!' };
      }
    );
    builder.addMatcher(
      action => {
        return action.type.endsWith('/pending');
      },
      (state, action) => {
        state.value = { name: 'Loading...' };
      }
    );
  },
});

// Exporting All the State Updating Functions
export const { updateName, loadUser, loadLocalStorage, loadCookies, logout } =
  userReducer.actions;
export default userReducer.reducer;
