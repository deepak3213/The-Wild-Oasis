import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
function Cabins() {
  const { data, isLoading, error } = useQuery({
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <h1>{import.meta.env.supabaseKey}</h1>
    </>
  );
}

export default Cabins;
