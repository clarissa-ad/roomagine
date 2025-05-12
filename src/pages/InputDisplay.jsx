import { useDispatch, useSelector } from 'react-redux';
import { setTextInput, setUploadedImage } from '../slices/inputSlice'; // Import Redux actions
import { Link } from 'react-router-dom';
import '../components/pages.css';
import '../components/comp.css';
import { useEffect, useState } from 'react';
import axios from "axios"

export function InputDisplay() {
    const dispatch = useDispatch();
    const { textInputs = {}, uploadedImage } = useSelector((state) => state.input); // Add fallback for textInputs
    // const [uploadedImage, setUploadedImage] = 
    const [vibe, setVibe] = useState("");
    const [maxItem, setMaxItem] = useState(0);
    const [country, setCountry] = useState("");
    const [photoFile, setPhotoFile] = useState("");
    const [interiorBase64, setInteriorBase64] = useState("");
    const [designedBase64, setDesignedBase64] = useState("");
    const base64ImageUrl = `data:image/jpeg;base64,${designedBase64}`;
    const [allInteriors, setAllInteriors] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhotoFile(file);
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };
    


    const handleSend = async () => {
        const formData = new FormData();
        formData.append("file", photoFile);
        formData.append("vibe", vibe);
        formData.append("maxItem", maxItem)
        formData.append("country", country)

        try {
            const response = await axios.post(
                "https://nominally-picked-grubworm.ngrok-free.app/webhook-test/post-image",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            console.log(response.data.data);
            let temp = response.data.data
            temp = temp.filter((item, index) => index !== 0)
            setAllInteriors(response.data.data);
            setInteriorBase64(response.data.interior_base64_string);
            setDesignedBase64(response.data.designed_base64_string);
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };



  return (
    
    <>
        <h1>What's on your mind?</h1>
        <div className="input-container">
            {/* Image Upload */}
            <div className="flex flex-col items-start">
                <label htmlFor="image-upload" className="image-input">
                    <img src={previewImage || '/src/assets/icons/image-upload.svg'} alt="Upload Preview" />
                    <p>{photoFile ? 'Image Uploaded' : 'Upload an image of your room'}</p>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>

            {/* Text Inputs */}
            <div className="text-input">
                {/* <div className="text-input-desc">
                    <h3>What would you like to add to your room?</h3>
                    <textarea
                        value={textInputs.input1}
                        onChange={(e) => handleTextChange('input1', e.target.value)}
                        placeholder="A lamp for the corner, a rug for the floor, etc."
                        className="text-area"
                    />
                </div> */}
                <div className="text-input-desc">
                    <h3>How would you like to theme your room</h3>
                    <textarea
                        value={vibe}
                        onChange={(event) => {setVibe(vibe => (event.target.value))}}
                        placeholder="Cozy, Minimalist, Sport, Work, Study, etc."
                        className="text-area"
                    />
                </div>
                <div className="text-input-desc">
                    <h3>How many items do you want to add?</h3>
                    <textarea
                        value={maxItem}
                        onChange={(event) => {setMaxItem(maxItem => (event.target.value))}}
                        placeholder="1, 2, 3, etc. with a maximum of 8"
                        className="text-area"
                    />
                </div>
                <div className="text-input-desc">
                    <h3>Where do you want your items to come from (country)?</h3>
                    <a 
                        href="https://serpapi.com/google-countries" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        See Google Countries Here
                    </a>
                    <textarea
                        value={country}
                        onChange={(event) => {setCountry(country => (event.target.value))}}
                        placeholder="id, us, sg, jp, etc"
                        className="text-area"
                    />
                </div>
            </div>
        </div>

        {/* <div>
            <button>Generate</button>
        </div> */}
        <div className="ai-button-container">
        <Link>
            <button onClick={() => handleSend()} className="input-output-button">
            <img src="src/assets/icons/ai-gen-icon.svg" alt="AI Icon" />
            Generate your Image!
            </button>
        </Link>
        </div>

        
        {designedBase64 && (
            <div>
                <h2>Design Result:</h2>
                <img
                    src={base64ImageUrl}
                    alt="Desain dari n8n"
                    style={{ maxWidth: "100%", borderRadius: '10px', marginBottom: '30px' }}
                />
            </div>
        )}


        {Array.isArray(allInteriors) && allInteriors.length > 0 && (
            <div>
                <h2>Recommended Products:</h2>
                <div className="card-grid">
                    {allInteriors.map((item, index) => (
                        <div key={index} className="card">
                            <img
                                src={item.links}
                                alt={item.titles}
                                className="card-img"
                            />
                            <div className="card-body">
                                <h3>{item.titles}</h3>
                                <p><strong>Price:</strong> ${item.prices}</p>
                                <a
                                    href={item.product_link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="card-link"
                                >
                                    View Product
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
    </>
  );
}