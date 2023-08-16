import React, { useState } from 'react';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const db = getFirestore();
    const partiesRef = collection(db, 'parties');
  
    try {
      let querySnapshot;
  
      if (value.trim() === '') {
        querySnapshot = await getDocs(query(partiesRef));
        // If no input, display only the first result
        const firstResult = querySnapshot.docs.slice(0, 1).map((doc) => doc.data());
        setResults(firstResult);
      } else {
        querySnapshot = await getDocs(
          query(partiesRef, where('name', '>=', value), where('name', '<=', value + '\uf8ff'))
        );
        const results = querySnapshot.docs.map((doc) => doc.data());
        setResults(results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
      <button className="bg-white p-4">🔍</button>
    </div>
  );
};

export default SearchBar;
