import React, { useContext } from "react";
import CustomerCard from "./CustomerCard";
import { CustomerContext } from "../context/CustomerContext";

const CustomerList: React.FC = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  const { customers, selectedCustomer, setSelectedCustomer } = context;

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.email}
          customer={customer}
          isSelected={selectedCustomer?.email === customer.email}
          setSelectedCustomer={setSelectedCustomer}
        />
      ))}
    </div>
  );
};

export default CustomerList;
