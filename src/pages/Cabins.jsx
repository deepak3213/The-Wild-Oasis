import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";

import CreateCabinForm from "../features/cabins/CreateCabinForm";
function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
        <button
          style={{ height: "50px", border: "none" }}
          onClick={() => setShowForm(!showForm)}
        >
          Add New Cabin
        </button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
