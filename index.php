<?php
    require __DIR__."/src/includes/header.php";
?>

    <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12 text-right">
            <h1>Latin America is the most happy region as of 2024 according to Spotify*</h1>
            <h3>As of 2024, 7 LATAM countries occupy the top 10 of countries that, on average, streams songs with the highest mean valence (aka. happiness of the song)</h3>
        </div>
        <div class="col-12 d-flex justify-content-between">
            <div id="bar-chart" class="flex-grow-2"></div>
        </div>
        <a>[*]: Taking the mean valence of the Top 50 most streamed songs by country during the first day of all months as of 2024.</a>
        </div>
    </div>

<?php
    require __DIR__."/src/includes/footer.php";
?>
    