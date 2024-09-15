import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [myLocation, setMyLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMyLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Unable to get your position:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return myLocation;
}
