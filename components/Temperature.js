import { useEffect, useState } from "react";

function Temperature() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    async function fetchTemperature() {
      try {
        const res = await fetch(
          "https://https://document-scanner-ten.vercel.app/api/setTemperature"
        );
        const data = await res.json();
        setTemperature(data.temperature);
      } catch (err) {
        console.error(err);
      }
    }
    fetchTemperature();
  }, []);

  return (
    <div>
      {temperature === null ? (
        <h1>Loading...</h1>
      ) : (
        <h1>The current temperature is: {temperature}</h1>
      )}
    </div>
  );
}

export default Temperature;
