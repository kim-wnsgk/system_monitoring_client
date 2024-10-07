import React, { useState, useEffect } from 'react';

function App() {
    const [cpuInfo, setCpuInfo] = useState('');

    useEffect(() => {
        // 서버로부터 CPU 정보를 가져옴
        fetch('http://192.168.64.8:3001/cpu-info')
            .then((response) => response.text())
            .then((data) => {
                setCpuInfo(data);
            })
            .catch((error) => {
                console.error('Error fetching CPU info:', error);
            });
    }, []);

    return (
        <div>
            <h1>Server CPU Info</h1>
            <pre>{cpuInfo}</pre>
        </div>
    );
}

export default App;
