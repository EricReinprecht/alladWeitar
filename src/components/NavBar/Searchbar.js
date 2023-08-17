import React, {useCallback, useEffect, useState} from 'react';
import { collection, getDocs, query, where, getFirestore } from 'firebase/firestore';
import './Searchbar.css'

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = useCallback(async (value) => {
    const db = getFirestore();
    const partiesRef = collection(db, 'parties');

    try {
      let querySnapshot;

      if (value.trim() === '') {
        querySnapshot = await getDocs(query(partiesRef));
      } else {
        querySnapshot = await getDocs(
            query(partiesRef, where('nameToLowerCase', '>=', value), where('nameToLowerCase', '<=', value + '\uf8ff'))
        );
      }

      const results = querySnapshot.docs.map((doc) => doc.data());
      setResults(results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [setResults]); // Add setResults as a dependency if needed

  const handleChange = async (value) => {
    setInput(value);
    const results = await fetchData(value.toLowerCase()); // Wait for the promise to resolve
    // Now you can use the 'results' as needed
    setResults(results);
  }

  useEffect(() => {
    fetchData(input.toLowerCase())
        .then((results) => {
          // Do something with the results if needed
        })
        .catch((error) => {
          // Handle the error if needed
        });
  }, [input, fetchData]);

  return (
    <div className="searchbar">
        <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(event) => handleChange(event.target.value)}
        />
    </div>
  );
};

export default SearchBar;
