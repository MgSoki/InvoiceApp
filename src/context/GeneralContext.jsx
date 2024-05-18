import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 2, name: "Banana", price: 0.49 },
    { id: 3, name: "Orange", price: 0.79 },
    { id: 4, name: "Grapes", price: 2.99 },
    { id: 5, name: "Watermelon", price: 3.49 },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  const [records, setRecords] = useState([]);

  const addRecord = (newRecord) => {
   const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );
    if (isExistedRecord) {
      updateRecord(isExistedRecord.id, newRecord.quantity);
    } else {
      setRecords([...records, newRecord]);
    }
  };
  const removeRecord = (id) =>
    setRecords(records.filter((record) => record.id != id));

  const updateRecord = (id, addQuantity) => {
    setRecords(
      records.map((el) => {
        const newQuantity = el.quantity + addQuantity;
        const newCost = el.price * newQuantity;
        if (el.id === id) {
          return {
            ...el,
            quantity: newQuantity,
            cost: newCost,
          };
        }

        return el;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        openDrawer,
        toggleDrawer,
        addProduct,
        products,
        records,
        addRecord,
        removeRecord,
        updateRecord,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
