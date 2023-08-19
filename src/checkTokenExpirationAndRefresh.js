import { getAuth } from "firebase/auth";

export const refreshIdToken = async (user) => {
    const auth = getAuth();

    try {
        // Refresh the user's ID token
        const idTokenResult = await user.getIdTokenResult();
        console.log('Token refreshed successfully.');
    } catch (error) {
        console.error('Error refreshing token:', error);
    }
};

export const checkTokenExpirationAndRefresh = async (user) => {
    console.log("Checking Token");
    const auth = getAuth();

    try {
        const tokenInfo = await user.getIdTokenResult();
        const { expirationTime } = tokenInfo; // Destructure expirationTime
        const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

        // Set a threshold, like refreshing the token 5 minutes before it expires
        const refreshThreshold = 5 * 60; // 5 minutes in seconds

        if (expirationTime - currentTime < refreshThreshold) {
            console.log("Token refresh needed");
            // Token is close to expiring, refresh it
            await refreshIdToken(user);
        } else {
            console.log("Token is still valid");
        }
    } catch (error) {
        console.error('Error checking token expiration:', error);
    }
};
