import React, { useContext } from "react";
import EmptyStage from "./EmptyStage";
import Records from "./Records";
import { GeneralContext } from "../context/GeneralContext";

const RecordGroup = () => {
  const {records, removeRecord} = useContext(GeneralContext);
  return (
    <>
      
    {records.length === 0 && <EmptyStage/> }
      {records.map((record, index) => (
        <Records key={record.id} record={record} index={index} removeRecord={removeRecord}/>
      ))}
    </>
  );
};

export default RecordGroup;
