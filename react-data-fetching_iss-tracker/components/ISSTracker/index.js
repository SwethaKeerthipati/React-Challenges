// import { useEffect, useState } from "react";
// import Controls from "../Controls/index";
// import Map from "../Map/index";

// const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// export default function ISSTracker() {
//   const [coords, setCoords] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   async function getISSCoords() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const data = await response.json();
//         setCoords({ longitude: data.longitude, latitude: data.latitude });
//       } } catch (error) {
//         console.error(error);
//       }
//     }

//     useEffect(() => {
//       const timer = setInterval(() => {
//         getISSCoords();
//       }, 5000);

//       return () => {
//         clearInterval(timer);
//       };
//     }, []); return (
//       <main>
//         <Map longitude={coords.longitude} latitude={coords.latitude} />
//         <Controls
//           longitude={coords.longitude}
//           latitude={coords.latitude}
//           onRefresh={getISSCoords}
//         />
//       </main>
//     );
//   }

import { useEffect } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};

export default function ISSTracker() {
  const { data, error, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <main>
      <>
        <Map longitude={data.longitude} latitude={data.latitude} />
        <Controls
          longitude={data.longitude}
          latitude={data.latitude}
          onRefresh={() => mutate()}
        />
      </>
    </main>
  );
}
