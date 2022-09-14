import React from 'react';
import { Country, State, City } from 'country-state-city';

export function getCountries() {
  return (
    Country.getAllCountries().map((each) => ({
      value: each.isoCode,
      label: each.name,
    })) || []
  );
}

export function getState(countryCode: string | null) {
  if (!countryCode) {
    return [];
  }
  return (
    State.getStatesOfCountry(countryCode).map((each) => ({
      value: each.isoCode,
      label: each.name,
    })) || []
  );
}
