"use client"

import { createContext, useContext } from 'react';
import "@/styles/table.css"
import clsx from "clsx";

const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

export default TableContext;

export function Table({ children, className }) {
    return (
      <div
        className={clsx("flex flex-col text-sm", className)}
      >
        <TableContext.Provider value={{}}>
          {children}
        </TableContext.Provider>
      </div>
    );
  }

  Table.Header = function TableHeader({ children, className }) {
    return (
      <div
        className={clsx(
          "grid grid-cols-3 gap-4 px-2 py-2 font-semibold opacity-60 ",
          className
        )}
      >
        {children}
      </div>
    );
  };
  Table.Body = function TableBody({ children,className }) {
    return <div className={className}>{children}</div>;
  };
  
  Table.Row = function TableRow({ children, className, variant }) {
    return (
      <div
        className={clsx(
          "grid grid-cols-3 gap-4 px-2 py-1 text-white",
          variant === "ask" && "bg-[#421e1e]/50 text-red-400", // red
          variant === "bid" && "bg-[#1e3e1e]/50 text-green-400", // green
          className
        )}
      >
        {children}
      </div>
    );
  };
  
  
  
  Table.Cell = function TableCell({ children, className }) {
    return (
      <div className={clsx("flex items-center justify-center", className)}>
        {children}
      </div>
    );
  };