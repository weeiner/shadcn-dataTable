import React from "react";
import { DataTable } from "./payments/data-table";
import { columns } from "./payments/columns"; // Import columns
import { payments } from "./payments/payments"; // Import payments or define your data here
import { NewDataTable } from "./components/NewDataTable";

function App() {
  // Example data and columns for the DataTable component
  return (
    <div>
      {/* <DataTable columns={columns} data={payments} /> */}
      <NewDataTable />
    </div>
  );
}

export default App;
