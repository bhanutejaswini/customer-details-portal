import React, { useContext } from "react";
import PhotoGrid from "./PhotoGrid";
import { CustomerContext } from "../context/CustomerContext";

interface CustomerContextType {
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
}

interface Customer {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
  [key: string]: any;
}

const CustomerDetails: React.FC = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { selectedCustomer } = context;

  return (
    selectedCustomer && (
      <div className="customer-details">
        <h3>{`${selectedCustomer.name.first} ${selectedCustomer.name.last}`}</h3>
        <p>{`Email: ${selectedCustomer.email}`}</p>
        <p>{`Address: ${selectedCustomer.location.street.number}, ${selectedCustomer.location.street.name},`}</p>
        <p>{`${selectedCustomer.location.city}, ${selectedCustomer.location.state}, ${selectedCustomer.location.country}`}</p>
        <PhotoGrid />
      </div>
    )
  );
};

export default CustomerDetails;
