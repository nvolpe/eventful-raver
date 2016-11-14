import { Component, OnInit } from '@angular/core';

import { Event } from '../events/event';
import { EventService } from '../events/event.service';

declare var google: any;

@Component({
    selector: '.map-container',
    templateUrl: 'app/map/map.component.html',
    styleUrls: ['app/map/map.component.css']
})
export class MapComponent implements OnInit {
    map: any;
    events: Event[];
    errorMessage: string; 

    constructor(private _eventService: EventService) {
    }

    ngOnInit(): void {
        this.getEvents();

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


    getEvents() {
        this._eventService.getEvents() 
            .subscribe(
            events => this.events = events,
            error => this.errorMessage = <any>error);
    }

}
