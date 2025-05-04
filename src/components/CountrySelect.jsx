import React from "react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Australia",
  "Bangladesh", "Belgium", "Brazil", "Canada", "China", "Denmark", "Egypt", "France",
  "Germany", "India", "Indonesia", "Italy", "Japan", "Malaysia", "Mexico", "Netherlands",
  "Nigeria", "Norway", "Pakistan", "Russia", "Saudi Arabia", "Singapore", "South Africa",
  "Spain", "Sweden", "Switzerland", "Thailand", "United Arab Emirates", "United Kingdom",
  "United States", "Vietnam"
];

const CountrySelect = ({ id = "country", name = "country", value, onChange }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="border outline-none rounded-md p-2 mt-1 bg-white"
    >
      <option value="">Select a country</option>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
