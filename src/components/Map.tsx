import React from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import "../assets/esri/css/main.css"
import "../assets/esri/css/view.css"


function MapComponent() {
//   const popupTemplate = {
//     title: location,
//     content: [
//       {
//         type: "media",
//         title,
//         mediaInfos: [
//           {
//             type: "image",
//             value: {
//               sourceURL: url,
//             },
//           },
//         ],
//       },
//     ],
//   };

  React.useEffect(() => {
    const map = new Map({
      basemap: "streets-vector",
    });

    const view = new MapView({
      map,
      container: "mapDiv",
      zoom: 3,
    });
    view.when(async () => {
      const searchWidget = new Search({
        view,
        suggestionsEnabled: true,
        autoSelect: true,
        searchAllEnabled: true,
        resultGraphicEnabled: true,
        // popupTemplate,
      });
    });
  }, []);

  return (
        <div
          id="mapDiv"
          style={{ height: "100%", width: "100%", gridArea: "1" }}
        />
  );
}

export default MapComponent;