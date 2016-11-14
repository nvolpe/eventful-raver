import { Component } from '@angular/core';

import { Event } from '../events/event';
import { EventService } from '../events/event.service';

@Component({
    selector: '.js-sidemenu',
    templateUrl: 'app/sideMenu/sideMenu.component.html'
    //styleUrls: ['app/map/map.component.css']
})
export class SideMenuComponent {

    constructor(private _eventService: EventService) {
    }
}
