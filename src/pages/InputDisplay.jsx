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
        <h1>What's on your mind?</h1>
        <div className="input-container">
            {/* Image Upload */}
            <div className="flex flex-col items-start">
                <label htmlFor="image-upload" className="image-input">
                    <img src={uploadedImage || 'src\assets\icons\image-upload.svg'} alt="Upload Preview" />
                    <p>{uploadedImage ? 'Image Uploaded' : 'Upload an image of your room'}</p>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>

            {/* Text Inputs */}
            <div className="text-input">
                <div className="text-input-desc">
                    <h3>What would you like to add to your room?</h3>
                    <textarea
                        value={textInputs.input1}
                        onChange={(e) => handleTextChange('input1', e.target.value)}
                        placeholder="A lamp for the corner, a rug for the floor, etc."
                        className="text-area"
                    />
                </div>
                <div className="text-input-desc">
                    <h3>How would you like to theme your room</h3>
                    <textarea
                        value={textInputs.input2}
                        onChange={(e) => handleTextChange('input2', e.target.value)}
                        placeholder="Modern, minimalist, bohemian, etc."
                        className="text-area"
                    />
                </div>
                <div className="text-input-desc">
                    <h3>How many items do you want to add?</h3>
                    <textarea
                        value={textInputs.input3}
                        onChange={(e) => handleTextChange('input3', e.target.value)}
                        placeholder="1, 2, 3, etc. with a maximum of 8"
                        className="text-area"
                    />
                </div>
                <div className="text-input-desc">
                    <h3>Where do you want your items to come from?</h3>
                    <textarea
                        value={textInputs.input4}
                        onChange={(e) => handleTextChange('input4', e.target.value)}
                        placeholder="Local Indonesian carpenters, IKEA, Tokopedia, etc."
                        className="text-area"
                    />
                </div>
            </div>
        </div>

        <div className="ai-button-container">
        <Link to="/OutputDisplay">
            <button className="input-output-button">
            <img src="src/assets/icons/ai-gen-icon.svg" alt="AI Icon" />
            Generate your Image!
            </button>
        </Link>
        </div>
    </>
  );
}