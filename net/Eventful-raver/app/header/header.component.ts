import { Component } from '@angular/core';

import { Event } from '../events/event';
import { EventService } from '../events/event.service';

@Component({
    selector: '.js-header',
    templateUrl: 'app/header/header.component.html'
    //styleUrls: ['app/map/map.component.css']
})
export class HeaderComponent {

    constructor(private _eventService: EventService) {
    }
}
