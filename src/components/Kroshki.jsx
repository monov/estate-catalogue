import React, { useEffect, useState } from "react";
import "./Kroshki.css";
import { Link, useLocation } from "react-router-dom";

const Kroshki = () => {
  const [isKroshki, setKroshki] = useState();
  const location = useLocation();
  useEffect(() => {
    setKroshki(location.pathname.startsWith("/flats/"));
  }, [location.pathname]);
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  
  return (
    <div className={isKroshki ? "kroshki-body kroshki" : "kroshki-body"}>
      {pathSegments.length === 0 ? (
        <span className="kroshki-link">Главная страница</span>
      ) : (
        <>
          <Link className="kroshki-link" to="/">Главная страница</Link>&nbsp;&gt; 
          {pathSegments.map((segment, index) => (
            <React.Fragment key={segment}>
              {index === pathSegments.length - 1 ? (
                // Display the last segment without a link
                segment == "allflats" ? " Все квартиры" : console.log(segment)
              ) : (
                // Display other segments with a link and add " >" after them
                <div className="kroshki-link" >  
                  &nbsp;Квартира
                </div>
              )}
            </React.Fragment>
          ))}
        </>
      )}

      <div className="kroshki-nomer">Наш номер телефона: 90-102-10-31</div>
    </div>
  );
};

export default Kroshki;
