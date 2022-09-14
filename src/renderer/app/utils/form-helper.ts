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

export function getStates(countryCode?: string | null) {
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

export function getCities(
  countryCode?: string | null,
  stateCode?: string | null
) {
  if (!countryCode || !stateCode) {
    return [];
  }
  return (
    City.getCitiesOfState(countryCode, stateCode).map((each) => ({
      value: each.name,
      label: each.name,
    })) || []
  );
}
