import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Com from "./index";
import { fetchCountry } from "../Redux/countrySlice";
import { RingLoader } from "react-spinners";
import Images from "../assets/images";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  // Select country state from the Redux store
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();

  // Fetch country data when the component is mounted
  useEffect(() => {
    dispatch(fetchCountry());
  }, [dispatch]); // Add dispatch to the dependency array

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle search
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent form submission

    if (searchTerm.trim() !== "") {
      const filtered = country.countries.filter((country) =>
        country.name.official.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(country.countries); // Show all if no search term
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Search Area */}
      <section className="w-full max-w-md">
        <p className="text-xl font-medium mb-2">Search Data Resources:</p>
        <form className="max-w-md mx-auto" onSubmit={handleSearch}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleSearchChange}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* Search Results Section */}
      <section className="bg-Back_White h-[500px] w-[90%] p-6 rounded-lg shadow-md">
        <p className="text-lg font-semibold">Search Results:</p>

        {country.loading && (
          <div className="flex justify-center items-center w-full h-full">
            <div>
              <RingLoader color="#1da1f2" loading={country.loading} />
              <p className="text-md">Loading...</p>
            </div>
          </div>
        )}
        {!country.loading && country.error ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="w-1/3 ">
              <img src={Images.NoInternet} alt="" />
              <div>Error: {country.error}</div>
            </div>
          </div>
        ) : null}

        {searchTerm === "" ? (
          <div className="flex  gap-5 justify-center flex-wrap my-5 h-[400px] overflow-y-auto">
            {country.countries.map((country, index) => {
              console.log(country); // Ensure you are receiving valid data
              return (
                <Com.Card
                  key={index} // Add a key for list rendering
                  img={country.flags.svg} // Safely access flags
                  title={country.name.common} // Adjust to your data structure
                  official={country.name.official}
                  capital={country.capital}
                  region={country.region}
                  population={country.population}
                  languages={country.languages}
                  currencies={country.currencies}
                  flag={country.flag}
                  googleMaps={country.maps}
                />
              );
            })}
          </div>
        ) : (
          <div>
            {!country.loading && filteredCountries?.length ? (
              <div className="flex gap-5 justify-center flex-wrap my-5 h-[400px] overflow-y-auto">
                {filteredCountries.map((country, index) => {
                  console.log(country); // Ensure you are receiving valid data
                  return (
                    <Com.Card
                      key={index} // Add a key for list rendering
                      img={country.flags.svg} // Safely access flags
                      title={country.name.common} // Adjust to your data structure
                      official={country.name.official}
                      capital={country.capital}
                      region={country.region}
                      population={country.population}
                      languages={country.languages}
                      currencies={country.currencies}
                      flag={country.flag}
                      googleMaps={country.maps}
                    />
                  );
                })}
              </div>
            ) : (
              !country.loading && <div>No data found</div> // Handle empty state
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Search;
