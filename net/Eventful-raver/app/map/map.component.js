"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var event_service_1 = require('../events/event.service');
var MapComponent = (function () {
    function MapComponent(_eventService) {
        this._eventService = _eventService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var uluru = { lat: -25.363, lng: 131.044 };
        this.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: this.map
        });
        console.log('Succesfully loaded the map');
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: '.map-container',
            templateUrl: 'app/map/map.component.html',
            styleUrls: ['app/map/map.component.css']
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map