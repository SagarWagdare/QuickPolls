import { createSlice } from '@reduxjs/toolkit'
import { pollsquestions } from '../Poll/Pollquestions';


const pollSlice = createSlice({
  name: "polls",
  initialState: {
    polls: pollsquestions,
    loading: false,
    error: null,
    value: '0',
  },
  reducers: {
    setPolls: (state, action) => {
      state.polls = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: state => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateInputValue: (state, action) => {
      state.value = action.payload;
    },
  
  }
});
// extract the actions
const { setPolls, setLoading, setError ,UpdateInputValue} = pollSlice.actions;
export default pollSlice.reducer;



