import { createSlice } from '@reduxjs/toolkit'
import { pollsquestions } from '../Poll/Pollquestions';
const pollSlice = createSlice({
  name: "polls",
  initialState: {
    polls: pollsquestions,
    loading: false,
    error: null
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
    addOption: (state, action) => {
      state.options.push(action.payload);
    },
    // selectOption: (state, action) => {
    //   state.selectedOption = action.payload;
    // }
  }
});
// extract the actions
const { setPolls, setLoading, setError ,addOption} = pollSlice.actions;
export default pollSlice.reducer;



