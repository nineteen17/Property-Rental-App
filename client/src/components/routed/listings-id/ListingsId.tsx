import { usePropertyId } from "../../../hooks/useListings";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./ListingsId.scss";
import { RaceBy } from "@uiball/loaders";

declare const Microsoft: any;
declare global {
  interface Window {
    Microsoft: any;
    bingLoaded: () => void;
  }
}
const ListingsId = () => {
  const { id } = useParams();
  const { data: property, isLoading, error } = usePropertyId(id);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const [bingLoaded, setBingLoaded] = useState(!!window.Microsoft);

  useEffect(() => {
    if (!bingLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://www.bing.com/api/maps/mapcontrol?callback=bingLoaded";
      script.async = true;
      script.defer = true;
      window.bingLoaded = () => setBingLoaded(true);
      document.body.appendChild(script);
    }
  }, [bingLoaded]);

  useEffect(() => {
    if (property && property.location && bingLoaded) {
      new window.Microsoft.Maps.Map(mapRef.current, {
        credentials:
          "AjSFkCx6eownbwErE8iNP5OPyRgGfialIvhQRfMqH61VnxCPM1P9OAZ8Wib0VuP8",
        center: new Microsoft.Maps.Location(-36.8485, 174.7633),
        mapTypeId: window.Microsoft.Maps.MapTypeId.road,
        zoom: 10,
      });
    }
  }, [property, bingLoaded]);

  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    if (property && property.imgUrls && property.imgUrls[0]) {
      setSelectedImage(property.imgUrls[0]);
    }
  }, [property]);

  if (isLoading) {
    return (
      <div>
        <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
      </div>
    );
  }

  if (error) {
    return <div>Error: No Property</div>;
  }

  return (
    <div className="ListingsId-container">
      <div className="ListingsId">
        <div className="property-details">
          <div className="top">
            <div className="images">
              <h1>
                <span className="address">{property.location["address"]}</span>,
                <span className="location">
                  {property.location["suburb"]}, {property.location["city"]}
                </span>
              </h1>

              <img
                className="main-image"
                src={selectedImage}
                alt={property._id}
              />
              <div className="other-images">
                {property.imgUrls.map((url: string, index: number) => (
                  <img
                    key={index}
                    className="small-image"
                    src={url}
                    alt={`Property image ${index + 1}`}
                    onClick={() => setSelectedImage(url)}
                  />
                ))}
              </div>
            </div>
            <div className="right-side">
              <button onClick={() => navigate(`/apply/${id}`)}>
                Apply here
              </button>
              <button onClick={() => navigate(`/booking/${id}`)}>
                Book a viewing
              </button>
              {bingLoaded ? (
                <div
                  ref={mapRef}
                  style={{ width: "400px", height: "250px" }}
                ></div>
              ) : (
                <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
              )}
            </div>
          </div>
          <div className="bottom">
            <p>
              {property.location["suburb"]}, {property.location["city"]}
            </p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Parking: {property.parkings}</p>
            <p>Pet friendly: {property.petFriendly}</p>
            <p>Price: ${property.price}</p>
            <p>Description: {property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsId;
