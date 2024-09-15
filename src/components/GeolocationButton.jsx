import useGeolocation from "../hooks/useGeolocation";
import { useSearchContext } from "../providers/SearchProvider";
import { TbViewfinder } from "react-icons/tb";

export default function GeolocationButton() {
  const { findPlace } = useSearchContext();
  const myLocation = useGeolocation();

  return (
    <button
      className="findme"
      onClick={() =>
        findPlace({ lat: myLocation.latitude, lon: myLocation.longitude })
      }
    >
      <TbViewfinder color="white" size={50} />
    </button>
  );
}
