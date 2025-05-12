import { useDispatch, useSelector } from 'react-redux';
import { setTextInput, setUploadedImage } from '../slices/inputSlice'; // Import Redux actions
import { Link } from 'react-router-dom';
import '../components/pages.css';
import '../components/comp.css';

export function InputDisplay() {
  const dispatch = useDispatch();
  const { textInputs = {}, uploadedImage } = useSelector((state) => state.input); // Add fallback for textInputs

  console.log('textInputs:', textInputs); // Debugging

  const handleTextChange = (key, value) => {
    dispatch(setTextInput({ key, value })); // Dispatch text input action
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(setUploadedImage(reader.result)); // Dispatch uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <h1>Image Generation Prompt</h1>
      <div className="input-container">
        {/* Image Upload */}
        <label htmlFor="image-upload" className="image-input">
          <img src={uploadedImage || 'src/assets/image-upload-placeholder.svg'} alt="Uploaded Preview" />
          <p>{uploadedImage ? 'Image Uploaded' : 'Upload an image of your room'}</p>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>

        {/* Text Inputs */}
        <div className="text-input">
          <h1>What's on your mind?</h1>
          <textarea
            value={textInputs.input1}
            onChange={(e) => handleTextChange('input1', e.target.value)}
            placeholder="What would you like to add to your room?"
            className="text-area"
          />
          <textarea
            value={textInputs.input2}
            onChange={(e) => handleTextChange('input2', e.target.value)}
            placeholder="How do you want your room to feel?"
            className="text-area"
          />
          <textarea
            value={textInputs.input3}
            onChange={(e) => handleTextChange('input3', e.target.value)}
            placeholder="How many items do you want to add?"
            className="text-area"
          />
          <textarea
            value={textInputs.input4}
            onChange={(e) => handleTextChange('input4', e.target.value)}
            placeholder="Where do you want your items to come from?"
            className="text-area"
          />
        </div>
      </div>

      {/* Link to OutputDisplay */}
      <Link to="/OutputDisplay">
        <button>Generate your Image!</button>
      </Link>
    </>
  );
}