import { useGeolocation } from "react-use";

const distance = (lat2, lon2) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = useGeolocation();
  const lat1 = state.latitude;
  const lon1 = state.longitude;

  const R = 6371e3;
  const x1 = (lat1 * Math.PI) / 180;
  const x2 = (lat2 * Math.PI) / 180;
  const y1 = ((lat2 - lat1) * Math.PI) / 180;
  const y2 = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(y1 / 2) * Math.sin(y1 / 2) +
    Math.cos(x1) * Math.cos(x2) * Math.sin(y2 / 2) * Math.sin(y2 / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = ((R * c) / 1000).toFixed(2);

  return d;
};

export default distance;
