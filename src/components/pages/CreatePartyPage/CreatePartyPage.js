import React, { useState } from 'react';
import './CreatePartyPage.css';
import { db } from '../../../firebaseConfig';
import { collection, addDoc, updateDoc, arrayUnion, doc, getDoc } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL, getStorage } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';
import Cookies from 'js-cookie';

export default function CreatePartyPage() {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        startDate: '',
        endDate: '',
        startTime: '',
        image: null,
        imageUrl: '',
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setFormData({ ...formData, image: event.target.result });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select an image file.');
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            location: '',
            startDate: '',
            endDate: '',
            startTime: '',
            image: null,
            imageUrl: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) {
            return;
        }

        setLoading(true);

        try {
            const userObject = JSON.parse(
                Cookies.get('rememberedUser') || sessionStorage.getItem('rememberedUser')
            );
            const userUID = userObject.uid;
            const partiesCollectionRef = collection(db, 'parties');

            const storage = getStorage();
            const imageRef = ref(storage, `party_images/${formData.image.name}`);
            await uploadString(imageRef, formData.image, 'data_url');
            const imageURL = await getDownloadURL(imageRef);

            const serverTimestampValue = serverTimestamp();
            const newPartyData = {
                name: formData.name,
                nameToLowerCase: formData.name.toLowerCase(),
                location: formData.location,
                startDate: formData.startDate,
                endDate: formData.endDate,
                startTime: formData.startTime,
                image: imageURL,
                createdBy: userUID,
                createdAt: serverTimestampValue,
            };

            const newPartyRef = await addDoc(partiesCollectionRef, newPartyData);
            const newPartyID = newPartyRef.id;

            await updateDoc(newPartyRef, { id: newPartyID });

            const userDocRef = doc(db, 'users', userUID);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                await updateDoc(userDocRef, {
                    createdParties: arrayUnion(newPartyRef.id),
                });
            }

            resetForm();
            alert('Party created successfully!');
        } catch (error) {
            console.error('Error creating party: ', error);
        } finally {
            setLoading(false);
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
                            name="name"
                            placeholder="Name"
                            className="party-data-input"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            className="party-data-input"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Start Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className="party-data-input"
                            value={formData.startDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">End Date</label>
                        <input
                            type="date"
                            name="endDate"
                            className="party-data-input"
                            value={formData.endDate}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Start Time</label>
                        <input
                            type="time"
                            name="startTime"
                            className="party-data-input"
                            value={formData.startTime}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Image (max-height: 400px)</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        Create Party
                    </button>
                </div>
            </form>
        </div>
    );
}
