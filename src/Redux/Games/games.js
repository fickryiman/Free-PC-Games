import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'GET https://www.freetogame.com/api/games?platform=pc';

export const fetchGames = createAsyncThunk('fetch-games', async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
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
