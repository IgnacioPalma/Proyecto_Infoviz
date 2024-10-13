d3.csv("data/output.csv").then(function(data) {
    // Create an array of objects to keep country, valence, and continent together when sorting
    const combinedData = data.map(row => ({
      country: row.country,
      country_name: row.country_name,
      valence: parseFloat(row.valence),
      continent: row.continent
    }));
  
    // Sort the combined data by valence (greatest to least)
    combinedData.sort((a, b) => b.valence - a.valence);
  
    // Extract sorted arrays
    const countries = combinedData.map(item => item.country);
    const valences = combinedData.map(item => item.valence);
    const continents = combinedData.map(item => item.continent);
  
    // Create separate traces for LATAM and non-LATAM countries
    const latamTrace = {
      y: countries.filter((_, i) => ['NA', 'SA'].includes(continents[i])),
      x: valences.filter((_, i) => ['NA', 'SA'].includes(continents[i])),
      name: 'LATAM Countries',
      orientation: 'h',
      type: 'bar',
      text: combinedData.filter(item => ['NA', 'SA'].includes(item.continent)).map(item => item.country_name),
      hoverinfo: 'text',
      marker: {
        color: '#000000'
      }
    };
  
    const otherTrace = {
      y: countries.filter((_, i) => !['NA', 'SA'].includes(continents[i])),
      x: valences.filter((_, i) => !['NA', 'SA'].includes(continents[i])),
      name: 'Other Countries',
      orientation: 'h',
      type: 'bar',
      text: combinedData.filter(item => !['NA', 'SA'].includes(item.continent)).map(item => item.country_name),
      hoverinfo: 'text',
      marker: {
        color: '#CFF0D1'
      }
    };
  
    // Calculate initial dimensions
    const aspectRatio = 1600 / 1200; // height / width from original layout
  
    // Function to get updated layout
    function getUpdatedLayout() {
      const windowWidth = window.innerWidth;
      // Use 85% of window width as plot width, with a maximum of 1050px
      const newWidth = Math.min(windowWidth * 0.85, 1050);
      const newHeight = newWidth * aspectRatio;
      const newSize = aspectRatio * 10;
  
      return {
        xaxis: { title: 'Country'},
        yaxis: { title: 'Valence (aka. happiness of the song)', categoryorder: 'total ascending'},
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        width: newWidth,
        height: newHeight,
        margin: {
          t: 20
        },
        font: {
          family: 'Instrument Sans',
          size: newSize,
          color: '#CFF0D1'
        },
        showlegend: true
      };
    }
    
    // Remove all the Plotly stuff
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
    Plotly.newPlot('bar-chart', [latamTrace, otherTrace], getUpdatedLayout(), config);
  
    // Add event listener for window resize
    window.addEventListener('resize', () => {
      // Debounce the resize event
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        Plotly.relayout('bar-chart', getUpdatedLayout());
      }, 100);
    });
  });