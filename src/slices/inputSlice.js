import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  textInputs: {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
  },
  uploadedImage: null,
  processedImage: null,
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setTextInput: (state, action) => {
      const { key, value } = action.payload;
      state.textInputs[key] = value; // Dynamically update the specific input
    },
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
    setProcessedImage: (state, action) => {
      state.processedImage = action.payload;
    },
  },
});

export const { setTextInput, setUploadedImage, setProcessedImage } = inputSlice.actions;
export default inputSlice.reducer;