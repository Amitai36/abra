import Plot from "react-plotly.js"

import { useGetWeather } from "../api/usePlace"
import { Typography } from "@mui/material"


interface ChartProps {
    x: number,
    y: number
}

//create chart using plotly.js with react
function Chart(props: ChartProps) {
    const {  x, y } = props
    const {data, isLoading} = useGetWeather({x, y})
    if(isLoading)
    {
        return <Typography component="h1">Loaiding</Typography>
    }
    if(!data)
    {
        return <Typography component="h1">NO DATA</Typography>
    }
    return (
        <div>
            <Plot
                data={[
                    {
                        x: [new Date()],
                        y: [data.main.pressure],
                        mode: "markers",
                        type: "bar",
                        name: "weather chart",
                    },
                ]}
                layout={{
                    title: "time on pressure",
                    xaxis: {
                        title: "Date",
                        type: "date"
                    },
                    yaxis: {
                        title: "pressure",
                        type:"linear"
                    },
                }}
                style={{height:"100%", width:"100%"}}
            />
        </div>
    )
}

export default Chart
