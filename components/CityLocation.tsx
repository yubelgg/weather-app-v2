'use client'
import React, {useState} from 'react'
import {Country, City, State} from "country-state-city";
import Select from "react-select";
import {useRouter} from "next/navigation";
import { GlobeIcon } from "@heroicons/react/solid";
import {stat} from "fs";

type countrySelection = {
    value: {
        isoCode: string;
        countryCode: string;
        latitude: string;
        longitude: string;
    };
    label: string;
} | null;

type statesSelection = {
    value: {
        name: string;
        isoCode: string;
        countryCode: string;
        stateCode: string;
        latitude: string;
        longitude: string;
    };
    label: string;
} | null;

type citySelection = {
    value: {
        name: string;
        latitude: string;
        longitude: string;
        countryCode: string;
        stateCode: string;
    };
    label: string;
} | null;

const countryOptions = Country.getAllCountries().map((country) => ({
    value: {
        latitude: country.latitude,
        longitude: country.longitude,
        isoCode: country.isoCode,
    },
    label: country.name,
}));

function CityLocation() {
    //including "| null" in the useState<> results in error for handleCountrySelection
    const [country, setCountry] = useState<countrySelection>(null);
    const [states, setStates] = useState<statesSelection>(null);
    const [city, setCity] = useState<citySelection>(null);

    const router = useRouter();
    const handleCountrySelection = (selectedCountry: countrySelection) => {
        setCountry(selectedCountry);
        setStates(null);
        setCity(null);
    };

    const handleStateSelection = (selectedStates: statesSelection) => {
        setStates(selectedStates);
        setCity(null);
    }
    const handleCitySelection = (selectedCity: citySelection) => {
        setCity(selectedCity);
    }

    return (
        <div className="space-y-3">
            <div className="space-y-3">
                <div className="flex items-center space-x-3">
                    <GlobeIcon className="h-10 w-10"></GlobeIcon>
                    <label htmlFor="country">Country</label>
                </div>
                <Select
                    className="text-black"
                    value={country}
                    onChange={handleCountrySelection}
                    options={countryOptions}
                ></Select>
            </div>

            {country && (
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <GlobeIcon className="h-10 w-10"></GlobeIcon>
                        <label htmlFor="states">States</label>
                    </div>
                    <Select
                        className="text-black"
                        value={states}
                        onChange={handleStateSelection}
                        //city selectors works despite the error
                        options={
                            State.getStatesOfCountry(country.value.isoCode)?.map((state) => ({
                                value: {
                                    name: state.name,
                                    isoCode: state.isoCode,
                                    countryCode: state.countryCode,
                                    latitude: state.latitude,
                                    longitude: state.longitude,
                                },
                                label: state.name,
                            }))
                        }
                    ></Select>
                </div>
            )}
            {country && states && (
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <GlobeIcon className="h-10 w-10"></GlobeIcon>
                        <label htmlFor="cities">City</label>
                    </div>
                    <Select
                        className="text-black"
                        value={city}
                        onChange={handleCitySelection}
                        //city selectors works despite the error
                        options={
                            City.getCitiesOfState(states.value.countryCode, states.value.isoCode)?.map((city) => ({
                                value: {
                                    name: city.name,
                                    countryCode: city.countryCode,
                                    stateCode: city.stateCode,
                                    latitude: city.latitude,
                                    longitude: city.longitude,
                                },
                                label: city.name,
                            }))
                        }
                    ></Select>
                </div>
            )}
        </div>

    )
}

export default CityLocation