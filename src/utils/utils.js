// @flow
import Geolocation from '@react-native-community/geolocation';
import {GoogleMapsApiKey} from '../config';
import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';
import moment from 'moment';
import Geocoder from 'react-native-geocoder';
import {Platform} from 'react-native';

// simply add your google key
Geocoder.fallbackToGoogle(GoogleMapsApiKey);
// cache the address data to reduce geocoding API calls.
const cache = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 30, // 30days
  enableCache: true,
});
cache.sync = {
  address(params) {
    // returns null if cache is missing
    const {resolve} = params;
    resolve && resolve(null);
  },
};

export function getCurrenntLocation(option) {
  return new Promise(function(resolve, reject) {
    Geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      timeout: 30000,
      maximumAge: 1000,
    });
  });
}

export async function getAddress(location) {
  await Geocoder.geocodePosition({
    lat: location.latitude,
    lng: location.longitude,
  })
    .then(ret => {
      // res is an Array of geocoding object (see below)
      console.log('getAddress ret' + JSON.stringify(ret));
      return ret;
    })
    .catch(err => {
      console.log('getAddress :error' + JSON.stringify(err));
      return {};
    });
}
export async function getLatLong(address) {
  await Geocoder.geocodeAddress(address)
    .then(res => {
      // res is an Array of geocoding object (see below)

      console.log(
        'getLatLong:ADDRESS GEOCODE address:res' + JSON.stringify(res),
      );
      var location = {
        latitude: res[0].position.lat,
        longitude: res[0].position.lng,
      };
      console.log('getLatLong:location ' + JSON.stringify(location));
      return location;
    })
    .catch(err => {
      console.log('getAddress:ADDRESS GEOCODE err:' + JSON.stringify(err));
      return {};
    });
}
export async function getLatLong1(address: string) {
  const response = await fetch(
    'https://maps.google.com/maps/api/geocode/json?address=' +
      address +
      '&key=' +
      GoogleMapsApiKey,
    {
      method: 'GET',
    },
  );
  if (response.status >= 200 && response.status < 300) {
    const json = await response.json();
    if (json.status !== 'OK') {
      throw new Error(
        'Can not determine location from the address: ' + address,
      );
    }
    return json.results[0].geometry.location;
  } else {
    let message;
    try {
      const json = await response.json();
      message = json.message || json.error_description;
    } catch (err) {
      message = `Code: ${response.status} ${response.statusText}`;
    }
    throw new Error(message);
  }
}

export function formatDateString(date: Date): string {
  return moment(date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
}

export function formatDate(date: Date): string {
  return moment(date).format('h:mmA MM/DD/YYYY ');
}
export function numberWithCommas(x) {
  // converts 1000 -> 1,000
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return 0;
  }
}

export function renderStringZeroIfUndefined(value) {
  if (value) {
    return value + '';
  } else {
    if (value === undefined || value === 0) {
      return '0';
    } else {
      return '';
    }
  }
}

export function renderStringNAIfUndefined(value) {
  if (value) {
    return value;
  } else {
    if (value === undefined) {
      return 'NA';
    } else {
      return '';
    }
  }
}
export function renderEmptyStringIfUndefined(value) {
  if (value) {
    return value;
  } else {
    return '';
  }
}

export function convertToStringIfInteger(integer) {
  if (integer && typeof integer === 'number') {
    return integer + '';
  } else {
    return '';
  }
}

export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === 'desc' ? comparison * -1 : comparison;
  };
}

export function normalizeLat(lat) {
  if (lat > 90) {
    const newLat = -90 + (lat - 90);
    return normalizeLat(newLat);
  } else if (lat < -90) {
    const newLat = 90 - (-90 - lat);
    return normalizeLat(newLat);
  } else {
    return lat;
  }
}

export function normalizeLon(lon) {
  if (lon > 180) {
    const newLon = -180 + (lon - 180);
    return normalizeLon(newLon);
  } else if (lon < -180) {
    const newLon = 180 - (-180 - lon);
    return normalizeLon(newLon);
  } else {
    return lon;
  }
}
