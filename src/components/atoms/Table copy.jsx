"use client"

import { createContext, useContext } from 'react';
import "@/styles/table.css"

const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

export default TableContext;

export function Table({ children }) {
    return (
      <TableContext.Provider value={{}}>
        <div className="table">{children}</div>
      </TableContext.Provider>
    );
  }

  Table.Header = function TableHeader({ children,prop }) {
    return <div className="table__header" {...prop}>{children}</div>;
  };
  
  Table.Body = function TableBody({ children }) {
    return <div className="table__body">{children}</div>;
  };
  
  Table.Row = function TableRow({ children }) {
    return <div className="table__row">{children}</div>;
  };
  
  Table.Cell = function TableCell({ children }) {
    return <div className="table__cell">{children}</div>;
  };