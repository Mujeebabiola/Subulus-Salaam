import React from "react";
var BrandName = "Subulus Salaam";
var startYear = 2018;
var CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <div>
        {BrandName} {startYear}
        {CurrentYear > startYear ? " - " + CurrentYear : null}
      </div>
    </div>
  );
}

export default Footer;
