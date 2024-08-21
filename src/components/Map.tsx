import Map from "@arcgis/core/Map";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search"

import Chart from "./Chart";
import "../assets/esri/css/main.css"
import "../assets/esri/css/view.css"
import { FilteringType } from "../api/types";
import { useGetPlace } from "../api/usePlace";
import { typeOption } from "../modules/zodSchema"
import DisplayList from "./DisplayList";

const select = document.createElement("select");
select.setAttribute("class", "esri-widget esri-select");
select.setAttribute("style", "width: 175px; font-family: 'Avenir Next W00'; font-size: 1em");
["all", ...typeOption].forEach((p) => {
  const option = document.createElement("option");
  option.value = p;
  option.innerHTML = p;
  select.appendChild(option);
});

function MapComponent() {
  const [displayAddress, setDisplayAddress] = useState('')
  const [filtering, setFiltering] = useState<FilteringType>("all")
  const { data, refetch, isLoading } = useGetPlace({ filter: filtering })
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
    //when the map loaded
    view.when(() => {
      //add select button for filtering on the map
      //add on ui of view
      view.ui.add(select, "top-right");
      const searchWidget = new Search({
        view,
        suggestionsEnabled: true,
        autoSelect: true,
        searchAllEnabled: true,
        resultGraphicEnabled: true,
      });
      searchWidget.search(displayAddress)
      view.on("click", (event) => {
        setCoord({ x: event.mapPoint.longitude, y: event.mapPoint.latitude })
      })
    })
  }, [displayAddress]);

  select.onmousedown = (e: any) => {
    setFiltering(e.target.value)
    refetch()
  }
  return (
    <Grid container height={"100%"}>
      <Grid xs={coord ? 6 : 8} item height={"100%"}>
        <div
          id="mapDiv"
          style={{ height: "100%", width: "100%", gridArea: "1" }}
        />

      </Grid>
       <Grid xs={2} item height={"100%"}>
        {(isLoading)?
        <Typography>Loading</Typography>:
        data&&
        <DisplayList setDisplayAddress={setDisplayAddress} items={data} />}
      </Grid>
      {coord && <Grid item xs={4} height={"100%"}>
        <Chart x={coord.x} y={coord.y} />
      </Grid>
      }    </Grid>
  );
}

export default MapComponent;