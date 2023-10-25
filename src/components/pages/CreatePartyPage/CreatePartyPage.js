import React, { useState } from 'react';
import './CreatePartyPage.css';
import { db } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL, getStorage } from 'firebase/storage';
import Cookies from "js-cookie"; // Import getStorage
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';



export default function CreatePartyPage() {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];

        // Check if the selected file is an image
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = (event) => {
                const dataURL = event.target.result;
                setImage(dataURL);
            };

            reader.readAsDataURL(file);
        } else {
            // Handle the case where a non-image file is selected
            alert('Please select an image file.');
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const rememberedUser = Cookies.get('rememberedUser'); // Get the user's ID from the cookie
        const userObject = JSON.parse(rememberedUser); // Assuming the cookie contains JSON data
        const userUID = userObject.uid;
        const partiesCollectionRef = collection(db, 'parties');

        try {
            // Upload the image to Firebase Storage
            const storage = getStorage();
            const imageRef = ref(storage, `party_images/${image.name}`);
            await uploadString(imageRef, image, 'data_url');

            // Get the download URL of the uploaded image
            const imageURL = await getDownloadURL(imageRef);



            // Create a new party document in Firebase Firestore with all fields
            console.log(partiesCollectionRef)
            const newPartyRef = await addDoc(partiesCollectionRef, {
                name: name,
                nameToLowerCase: name.toLowerCase(),
                location: location,
                startDate: startDate,
                endDate: endDate,
                startTime: startTime,
                image: imageURL,
                createdBy: userUID,
            });

            const newPartyID = newPartyRef.id;

// Update the document with the auto-generated ID
            await updateDoc(newPartyRef, { id: newPartyID });

            // Update the user's document to add the party ID to the createdParties array
            const userDocRef = doc(db, 'users', userUID);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                await updateDoc(userDocRef, {
                    createdParties: arrayUnion(newPartyRef.id),
                });
            }

            // Reset the input fields after creating the party
            setName('');
            setLocation('');
            setStartDate('');
            setEndDate('');
            setStartTime('');
            setImage(null);
            setImageUrl('');
            alert('Party created successfully!');
        } catch (error) {
            console.error(userUID);
            console.error('Error creating party: ', error);
        }
    };


    return (
        <div className="create-party-page">
            <form className="create-party-form" onSubmit={handleSubmit}>
                <div className="heading">
                    <h2>Create Party</h2>
                </div>
                <div className="inputs">
                    <div className="input-container">
                        <label className="input-heading">Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="party-data-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Location</label>
                        <input
                            type="text"
                            placeholder="Location"
                            className="party-data-input"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Start Date</label>
                        <input
                            type="date"
                            className="party-data-input"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">End Date</label>
                        <input
                            type="date"
                            className="party-data-input"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Start Time</label>
                        <input
                            type="time"
                            className="party-data-input"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Image (max-height:400px)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <button type="submit">Create Party</button>
                </div>
            </form>
        </div>
    );
}
