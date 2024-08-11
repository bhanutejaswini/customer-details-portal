import React from "react";
import Header from "./components/Header";
import Customers from "./components/Customers";
import { CustomerProvider } from "./context/CustomerContext";

import "./styles.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CustomerProvider>
        <Customers />
      </CustomerProvider>
    </>
  );
};

export default App;
