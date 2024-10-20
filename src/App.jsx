import React from "react";
import { DataTable } from "./payments/data-table";
import { columns } from "./payments/columns"; // Import columns
import { payments } from "./payments/payments"; // Import payments or define your data here

function App() {
  // Example data and columns for the DataTable component
  return (
    <div>
      <DataTable columns={columns} data={payments} />
      <div className="flex justify-around border border-black">
        <div>test</div>
        <div>test</div>
      </div>
    </div>
  );
}

export default App;
