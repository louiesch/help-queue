import React from "react";
import ticketsImage from "./../img/ticket.png";

function Header(){
  return (
    <React.Fragment>
    <img src={ticketsImage} alt="an image of tickets" />
    </React.Fragment>
  );
}

export default Header;