import React, {useState, useEffect} from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect, FormControl} from  '@material-ui/core';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountriesAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
       

        fetchCountriesAPI();
    }, [setFetchedCountries])

    console.log(fetchedCountries);
    return (
        <div>
            <FormControl className={styles.container}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value=''>Global</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>) }
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;