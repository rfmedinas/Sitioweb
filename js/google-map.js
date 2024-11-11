const sites = [
    {
        position: { lat: 5.7638884, lng: -73.140044 },
        title: "Lago de Sochagota",
        description: "lago",
        image: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/DSCN0173-1024x768.jpg"
    },
    {
        position: { lat: 5.8312975, lng: -73.32957 },
        title: "SITIO EN PAIPA #2",
        description: "SITIO EN PAIPA #2 DESCRIPCION",
        image: "https://example.com/image2.jpg"
    },
    {
        position: { lat: 5.8312975, lng: -73.32957 },
        title: "SITIO EN PAIPA #3",
        description: "SITIO EN PAIPA #3 DESCRIPCION",
        image: "https://example.com/image3.jpg"
    }
];


function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: 5.8312975, lng: -73.32957 } // PAIPA
    });


    sites.forEach(site => {
        const marker = new google.maps.Marker({
            position: site.position,
            map: map,
            title: site.title
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `<div class="item">
                            <div class="destination">
                                <a href="#" class="img d-flex justify-content-center align-items-center" style="background-image: url(${site.image});">
                                </a>
                                <div class="text p-3">
                                    <h3><a href="#">${site.title}</a></h3>
                                    <span class="listing">${site.description}</span>
                                </div>
                            </div>
                        </div>`
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });
}


                        