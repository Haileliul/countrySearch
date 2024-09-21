import { useState } from "react";

function CountryCard({
  img,
  title,
  official,
  capital,
  region,
  population,
  languages,
  currencies,
  googleMaps,
  flag,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Card Component */}
      <div
        onClick={handleCardClick}
        className="relative isolate w-[200px] h-fit rounded-xl shadow-md hover:shadow-2xl ring-2 ring-gray-200 transition-all duration-300 hover:scale-105 "
      >
        <div className="relative h-fit p-4 rounded-md transition-transform duration-300 hover:cursor-pointer">
          {/* Flag */}
          <div className="relative block h-[100px] overflow-hidden">
            <img
              src={img}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 rounded-t-md ${
                isHovered ? "scale-110" : ""
              }`}
            />
          </div>

          <div className="pt-2 text-center">
            <h5 className="text-lg font-bold tracking-tight text-Text_DarkGray py-1">
              {title}
            </h5>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4 ">{title}</h2>
            <div className="relative block h-[150px] overflow-hidden">
              <img
                src={img}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-300 rounded-t-md ${
                  isHovered ? "scale-110" : ""
                }`}
              />
            </div>
            {/* Country Name */}
            <div className="pt-4 text-center">
              <p className="text-sm text-gray-600 mt-1 text-start">
                <strong>Official Name:</strong> {official} <br />
                <strong>Flag: </strong>
                {flag}
              </p>
            </div>

            {/* Capital */}
            <div className="pt-2 text-start">
              <p className="text-sm text-gray-600">
                <strong>Capital:</strong> {capital && capital[0]}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Region:</strong> {region}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Population:</strong> {population.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Languages:</strong>{" "}
                {Object.values(languages).join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Currency:</strong> {Object.values(currencies)[0].name} (
                {Object.values(currencies)[0].symbol})
              </p>
            </div>

            {/* Link to Map */}
            <div className="pt-4 text-center">
              <a
                href={googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on Google Maps
              </a>
            </div>

            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CountryCard;
