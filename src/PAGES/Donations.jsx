import React from "react";
import DonationCard from "../COMPONENTS/DonationCard";
import DonationList from "../DonationList";
export default function Donations() {
  return (
    <div>
      {DonationList.map(function (element) {
        return (
          <DonationCard
            icon={element.icon}
            name={element.name}
            aim={element.aim}
          />
        );
      })}
    </div>
  );
}
