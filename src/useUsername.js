import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "./firebaseConfig"; // Import getFirestore function from your firebaseConfig

//call username in any component with: const { username } = useUsername(user);

// Fetch the username based on the user's UID
export const fetchUsername = async (uid) => {
    const db = getFirestore();

    try {
        const userDocRef = doc(db, "users", uid); // Assuming 'users' is your collection name
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
            return userDocSnap.data().username;
        }
        return null; // Username not found
    } catch (error) {
        console.error("Error fetching username:", error);
        return null;
    }
};

// Custom hook that handles fetching and providing the username
export function useUsername(user) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const fetchedUsername = await fetchUsername(user.uid);
            if (fetchedUsername) {
                setUsername(fetchedUsername);
            }
        };

        fetchUserData();
    }, [user.uid]);

    return {
        username,
        getUsername: () => username
    };
}
