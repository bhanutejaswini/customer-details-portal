import React from "react";

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
}

interface CustomerCardProps {
  customer: Customer | null;
  isSelected: boolean;
  setSelectedCustomer: (customer: Customer | null) => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  customer,
  isSelected,
  setSelectedCustomer,
}) => {
  if (!customer) return null;

  return (
    <div
      className={`customer-card ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedCustomer(customer)}
    >
      <h4>{`${customer.name.first} ${customer.name.last}`}</h4>
      <p>{`Email: ${customer.email}`}</p>
    </div>
  );
};

export default CustomerCard;
