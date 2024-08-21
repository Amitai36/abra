import React, { useState } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView.js";
import "../assets/esri/css/main.css"
import "../assets/esri/css/view.css"
import { Grid } from "@mui/material";
import Chart from "./Chart";
import {typeOption} from "../modules/zodSchema"


function MapComponent() {
  //save x, y hen user click on the map
  const [coord, setCoord] = useState<{ x: number, y: number }>()
  //create a map and handle when user clivk on the map
  React.useEffect(() => {
    const map = new Map({
      basemap: "streets-vector",
    });

    const view = new MapView({
      map,
      container: "mapDiv",
      zoom: 3,
    });

    //add select button for filtering on the map
    const select = document.createElement("select");
    select.setAttribute("class", "esri-widget esri-select");
    select.setAttribute("style", "width: 175px; font-family: 'Avenir Next W00'; font-size: 1em");
    ["all",...typeOption].forEach((p) => {
      const option = document.createElement("option");
      option.value = p;
      option.innerHTML = p;
      select.appendChild(option);
    });
    //add on ui of view
    view.ui.add(select, "top-right");

    view.on("click", (event) => {
      console.log(event)
      setCoord({ x: event.x, y: event.y })
    })
  }, []);

  return (
    <Grid container height={"100%"}>
      <Grid xs={coord ? 6 : 12}  item height={"100%"}>
        <div
          id="mapDiv"
          style={{ height: "100%", width: "100%", gridArea: "1" }}
        />

      </Grid>
      {coord && <Grid item xs={6} height={"100%"}>
        <Chart x={coord.x} y={coord.y} />
      </Grid>
      }    </Grid>
  );
}

export default MapComponent;