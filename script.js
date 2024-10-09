d3.csv("data/mean_valence_by_country_2024.csv").then(function(data) {
    // Extract country, valence, and continent columns
    const countries = data.map(row => row.country);
    const valences = data.map(row => parseFloat(row.valence));
    const continents = data.map(row => row.continent);

    // Define a color map for continents
    const continentColors = {
        'AF': 'gray',
        'AS': 'gray',
        'EU': 'gray',
        'NA': 'red',
        'SA': 'red',
        'OC': 'gray'
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

    // Define the layout for the chart
    const layout = {
        title: 'Mean Valence by Country',
        xaxis: { title: 'Country' },
        yaxis: { title: 'Valence' }
    };

    // Plot the chart
    Plotly.newPlot('bar-chart', [trace], layout);

    // Add event listener to the download button
    document.getElementById('download-svg').addEventListener('click', function() {
        Plotly.downloadImage('bar-chart', {format: 'svg', filename: 'bar_chart'});
    });
});