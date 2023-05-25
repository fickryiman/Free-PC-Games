import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8599077a4emsh479efd2103792b1p1a37d1jsn1b71b1b00798',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id';

export const fetchGameDetails = createAsyncThunk('fetch-details', async (id) => {
  const response = await fetch(`${url}=${id}`, options);
  const result = await response.json();
  return result;
});

const gameDetailSlice = createSlice({
  name: 'gameDetails',
  initialState: {
    gameDetails: [],
    loading: true,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameDetails.fulfilled, (state, action) => ({
      ...state,
      gameDetails: action.payload,
      loading: false,
    }));
  },
});

export default gameDetailSlice.reducer;
