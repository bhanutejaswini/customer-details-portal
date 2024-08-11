import React, { createContext, useState, useEffect, ReactNode } from "react";

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

export interface CustomerContextType {
  customers: Customer[];
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
}

export const CustomerContext = createContext<CustomerContextType | undefined>(
  undefined
);

interface CustomerProviderProps {
  children: ReactNode;
}

export const CustomerProvider: React.FC<CustomerProviderProps> = ({
  children,
}) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=100`);
      const result = await response.json();

      if (result.results) {
        setCustomers(result.results);

        if (!selectedCustomer && result.results.length > 0) {
          setSelectedCustomer(result.results[0]);
        }
      } else {
        console.error("Unexpected API response format:", result);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <CustomerContext.Provider
      value={{ customers, selectedCustomer, setSelectedCustomer }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
