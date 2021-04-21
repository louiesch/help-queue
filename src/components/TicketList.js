import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

// add props as parameter
function TicketList(props){
  return (
    <>
      <hr />
      {/* loop through the list passed down from ticket control */}
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;