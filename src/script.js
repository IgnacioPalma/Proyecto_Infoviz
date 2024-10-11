d3.csv("data/mean_valence_by_country_2024.csv").then(function(data) {
    // Create an array of objects to keep country, valence, and continent together when sorting
    const combinedData = data.map(row => ({
        country: row.country,
        valence: parseFloat(row.valence),
        continent: row.continent
    }));

    // Sort the combined data by valence (greatest to least)
    combinedData.sort((a, b) => b.valence - a.valence);

    // Extract sorted arrays
    const countries = combinedData.map(item => item.country);
    const valences = combinedData.map(item => item.valence);
    const continents = combinedData.map(item => item.continent);

    // Define a color map for continents
    const continentColors = {
        'AF': 'CFF0D1',
        'AS': 'CFF0D1',
        'EU': 'CFF0D1',
        'NA': 'black',
        'SA': 'black',
        'OC': 'CFF0D1'
    };

    // Map each continent to its corresponding color
    const colors = continents.map(continent => continentColors[continent]);

    // Create the trace for the bar chart
    const trace = {
        x: countries,
        y: valences,
        type: 'bar',
        marker: {
            color: colors
        }
    };

    // Calculate initial dimensions
    const aspectRatio = 1000 / 1000; // height / width from original layout
    
    // Function to get updated layout
    function getUpdatedLayout() {
        const windowWidth = window.innerWidth;
        // Use 90% of window width as plot width, with a maximum of 1100px
        const newWidth = Math.min(windowWidth * 0.9, 1100);
        const newHeight = newWidth * aspectRatio;

        return {
            xaxis: { title: 'Country' },
            yaxis: { title: 'Valence' },
            paper_bgcolor: "rgba(0,0,0,0)",
            plot_bgcolor: "rgba(0,0,0,0)",
            width: newWidth,
            height: newHeight,
            font: {
                family: 'Instrument Sans',
                size: 18,
                color: '#CFF0D1'
            }
        };
    }

    const config = {
        displayModeBar: true,
        modeBarButtonsToRemove: [
            'toImage', 'zoom2d', 'pan2d', 'select2d', 'lasso2d', 'zoomIn2d', 'zoomOut2d',
            'autoScale2d', 'resetScale2d', 'hoverClosestCartesian', 'hoverCompareCartesian',
            'zoom3d', 'pan3d', 'orbitRotation', 'tableRotation', 'resetCameraDefault3d',
            'resetCameraLastSave3d', 'hoverClosest3d', 'zoomInGeo', 'zoomOutGeo', 'resetGeo',
            'hoverClosestGeo', 'hoverClosestGl2d', 'hoverClosestPie', 'toggleHover',
            'resetViews', 'toggleSpikelines', 'resetViewMapbox'
        ],
        displaylogo: false
    };

    // Plot the chart with initial layout
    Plotly.newPlot('bar-chart', [trace], getUpdatedLayout(), config);

    // Add event listener for window resize
    window.addEventListener('resize', () => {
        // Debounce the resize event
        clearTimeout(window.resizeTimeout);
        window.resizeTimeout = setTimeout(() => {
            Plotly.relayout('bar-chart', getUpdatedLayout());
        }, 100);
    });
});