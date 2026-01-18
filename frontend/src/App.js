import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/message")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Backend error");
        }
        return res.json();
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Frontend Service</h1>
      <p><b>Environment:</b> {data.env}</p>
      <p><b>Backend Version:</b> {data.version}</p>
      <p><b>Message:</b> {data.message}</p>
    </div>
  );
}

export default App;