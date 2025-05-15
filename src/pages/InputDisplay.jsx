import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/pages.css';
import '../components/comp.css';
import axios from "axios";
import GenAI from "../assets/gen_ai.png"
import UploadIcon from "../assets/upload.png"

export function InputDisplay() {
    const [vibe, setVibe] = useState("");
    const [maxItem, setMaxItem] = useState("");
    const [country, setCountry] = useState("");
    const [photoFile, setPhotoFile] = useState(null);
    const [interiorBase64, setInteriorBase64] = useState("");
    const [designedBase64, setDesignedBase64] = useState("");
    const [allInteriors, setAllInteriors] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const base64ImageUrl = `data:image/jpeg;base64,${designedBase64}`;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhotoFile(file);
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleSend = async () => {
        if (!photoFile) {
            alert("Please upload an image first");
            return;
        }
        
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", photoFile);
        formData.append("vibe", vibe);
        formData.append("maxItem", maxItem);
        formData.append("country", country);

        try {
            const response = await axios.post(
                "https://primary-production-78161.up.railway.app/webhook-test/post-image",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            const { data } = response.data;
            const filteredData = data.filter((_, index) => index !== 0);

            setAllInteriors(filteredData);
            setInteriorBase64(response.data.interior_base64_string);
            setDesignedBase64(response.data.designed_base64_string);
        } catch (error) {
            console.error("Error sending form data:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col text-center bg-gray-50 dark:bg-neutral-900" style={{height : "2000px"}}>
            <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700 mt-20">Room Design Generator</h1>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 mx-auto" style={{width : "90%"}}>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Upload Section */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">Upload Your Room</h2>
                        <label 
                            htmlFor="image-upload" 
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-500 transition-colors"
                        >
                            {previewImage ? (
                                <img 
                                    src={previewImage} 
                                    alt="Upload Preview" 
                                    className="w-full h-64 object-cover rounded-md mb-4"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center p-8">
                                    <img 
                                        src={UploadIcon}
                                        alt="Upload Icon" 
                                        className="w-20 h-20 mb-4 opacity-70"
                                    />
                                    <p className="text-gray-500 text-center">
                                        Click to upload an image of your room
                                    </p>
                                </div>
                            )}
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            {/* <button 
                                className={`mt-2 px-4 py-2 rounded-md ${previewImage ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                {previewImage ? 'Change Image' : 'Select Image'}
                            </button> */}
                        </label>
                    </div>

                    {/* Text Inputs Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800">Design Preferences</h2>
                        
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Room Theme/Vibe
                            </label>
                            <textarea
                                value={vibe}
                                onChange={(e) => setVibe(e.target.value)}
                                placeholder="Cozy, Minimalist, Sport, Work, Study, etc."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                rows={3}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Number of Items to Add (max 8)
                            </label>
                            <input
                                type="number"
                                value={maxItem}
                                onChange={(e) => setMaxItem(e.target.value)}
                                placeholder="1, 2, 3, etc."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                min="1"
                                max="8"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Preferred Country for Products
                                <a
                                    href="https://serpapi.com/google-countries"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ml-2 text-indigo-600 text-xs hover:underline"
                                >
                                    (See country codes)
                                </a>
                            </label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                placeholder="id, us, etc"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button 
                        onClick={handleSend} 
                        disabled={isLoading || !photoFile}
                        className={`flex items-center px-6 py-3 rounded-full text-white font-medium ${isLoading || !photoFile ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Generating...
                            </>
                        ) : (
                            <>
                                <img src={GenAI} alt="AI Icon" className="w-5 h-5 mr-2" />
                                Generate Your Design
                            </>
                        )}
                    </button>
                </div>
            </div>

            {designedBase64 && (
                <div className="flex justify-center">
                    <div className="flex flex-col items-center" style={{ width: "40%" }}>
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700 pt-20">
                        Your Designed Room
                    </h2>
                    <div className="flex justify-center">
                        <img
                        src={base64ImageUrl}
                        alt="AI Room Design Result"
                        className="rounded-lg shadow-md max-w-full h-auto"
                        />
                    </div>
                    </div>
                </div>
            )}


            <div className="pt-10 flex justify-center"> 
                <div className=''>
                    {Array.isArray(allInteriors) && allInteriors.length > 0 && (
                        <div className="bg-white rounded-xl shadow-lg py-10">
                            <h2 className="text-2xl font-bold mb-6 text-gray-800">Recommended Products</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {allInteriors.map((item, index) => (
                                    <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="h-48 overflow-hidden">
                                            <img
                                                src={item.links}
                                                alt={item.titles}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Available";
                                                }}
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.titles}</h3>
                                            <p className="text-gray-600 mb-3">
                                                <span className="font-medium">Price:</span> {item.prices ? `${item.prices}` : 'Not available'}
                                            </p>
                                            <a
                                                href={item.product_link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-block w-full text-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
                                            >
                                                View Product
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default InputDisplay;