import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://658f518a2871a9866e7a68f4.mockapi.io';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'users/fetchSingle',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/users/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
