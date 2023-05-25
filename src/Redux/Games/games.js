import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8599077a4emsh479efd2103792b1p1a37d1jsn1b71b1b00798',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
};

export const fetchGames = createAsyncThunk('fetch-games', async () => {
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
});

const initialState = {
  gamesArray: [],
  loading: false,
};

const gameSlice = createSlice({
  name: 'games',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(fetchGames.fulfilled, (state, action) => ({
      ...state,
      gamesArray: action.payload,
      loading: false,
    }));
  },
});

export default gameSlice.reducer;
