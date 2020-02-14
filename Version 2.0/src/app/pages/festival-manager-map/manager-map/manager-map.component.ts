import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter, NgZone } from "@angular/core";
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: "ngx-manager-map",
  templateUrl: "./manager-map.component.html",
  styleUrls: ["./manager-map.component.scss"]
})
export class ManagerMapComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild("search", { static: false }) public searchElementRef: ElementRef;

  @Output() lat = new EventEmitter();
  @Output() lon = new EventEmitter();

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {}

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder();

      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.lat.emit(this.latitude.toString());
          this.lon.emit(this.longitude.toString());
          this.zoom = 12;
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        this.lat.emit(this.latitude.toString());
        this.lon.emit(this.longitude.toString());
      });
    }
  }

  markerDragEnd($event: any) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    // this.latitude = $event.coords.lat;
    // this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
    this.lat.emit(this.latitude.toString());
    this.lon.emit(this.longitude.toString());
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode(
      { location: { lat: latitude, lng: longitude } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }
}

