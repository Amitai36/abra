import React from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import Search from "@arcgis/core/widgets/Search";
import "../assets/esri/css/main.css"
import "../assets/esri/css/view.css"
import { Grid } from "@mui/material";
import Chart from "./Chart";


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
    view.on("click", (event) => {
      console.log(event.x)
      console.log(event.y)
    })
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
    <Grid container height={"100%"}>
      <Grid xs={6} height={"100%"}>
        <div
          id="mapDiv"
          style={{ height: "100%", width: "100%", gridArea: "1" }}
        />

      </Grid>
      <Grid xs={6} height={"100%"}>
        <Chart/>
      </Grid>
    </Grid>
  );
}

export default MapComponent;