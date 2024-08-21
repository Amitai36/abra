import Plot from "react-plotly.js"

function Chart() {
    return (
        <div>
            <Plot
                data={[
                    {
                        x: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
                        y: [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74],
                        mode: "markers",
                        type: "scatter",
                        name: "Boys",
                    },
                    {
                        x: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
                        y: [30, 36, 39, 42, 48, 53, 58, 62, 67.5, 68, 68.5],
                        mode: "lines+markers",
                        type: "scatter",
                        name: "Girls",
                        marker: { color: "red" },
                    },
                ]}
                layout={{
                    title: "Growth Rate in Children",
                    xaxis: {
                        title: "Age (years)",
                    },
                    yaxis: {
                        title: "Height (inches)",
                    },
                    width: 600,
                    height: 500,
                }}
            />
        </div>
    )
}

export default Chart
