import { Component, OnInit } from '@angular/core';

import { EventService } from '../events/event.service';

declare var google: any;

@Component({
    selector: '.map-container',
    templateUrl: 'app/map/map.component.html',
    styleUrls: ['app/map/map.component.css']
})
export class MapComponent implements OnInit {
    map: any;


    constructor(private _eventService: EventService) {
    }


    ngOnInit(): void {
        let uluru = { lat: -25.363, lng: 131.044 };
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        let marker = new google.maps.Marker({
            position: uluru,
            map: this.map
        });

        console.log('Succesfully loaded the map')
    }
}
