import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import axios from "axios";

const CountrySelector = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  async function getOptionbyName() {
    let name = await getCountry();
    let defaultCountry = options.filter(
      (country) => country.label.toLowerCase() === name.toLowerCase()
    );
    if (defaultCountry) setValue(defaultCountry);
  }

  const getCountry = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.country_name;
  };

  useEffect(() => {
    getOptionbyName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
};

export default CountrySelector;
