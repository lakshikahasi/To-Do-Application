import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Oval } from "react-loader-spinner";

export const ToDoItem = ({
  text,
  updateItem,
  deleteItem,
  changeStatus,
  status,
  loadingId,
  id,
}) => {

  console.log(loadingId, id);
  return (
    <div className="item">
      <input
        type="checkbox"
        className="checkbox"
        onChange={changeStatus}
        checked={status}
      />
      <div className="text">{status ? <s>{text}</s> : text}</div>
      {loadingId === id ? (
        <Oval
          visible={true}
          height="1.5em"
          width="1.5em"
          color="#0000FF"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <></>
      )}
      <div className="icons">
        <FaEdit className="icon" onClick={updateItem} />
        <MdDeleteSweep className="icon" onClick={deleteItem} />
      </div>
    </div>
  );
};
