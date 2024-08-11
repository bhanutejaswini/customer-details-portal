import React from "react";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";

const Customers: React.FC = () => {
  return (
    <div className="customers">
      <CustomerList />
      <CustomerDetails />
    </div>
  );
};

export default Customers;
