import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'map-container',
    templateUrl: 'app/map/map.component.html',
    styleUrls: ['app/map/map.component.css']
})
export class MapComponent implements OnInit {
    public pageTitle: string = 'Welcome';

    ngOnInit(): void {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
}
