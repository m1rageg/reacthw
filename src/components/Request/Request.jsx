import React, { useEffect, useState } from 'react';

const MyRequest = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setError('Error fetching data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Request for data</h1>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyRequest;
