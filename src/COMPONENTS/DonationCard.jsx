import react from "react";
export default function DonationCard(props) {
  return (
    <div className="jumbotron container">
      <div className="row">
        <div className="col-xs-4">
          <div className="row">
            <i class={props.icon}></i>
          </div>
          <div className="row">{props.name}</div>
        </div>
        <div>{props.aim}</div>
      </div>
    </div>
  );
}
