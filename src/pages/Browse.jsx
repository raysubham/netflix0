import React from "react";
import { useContent } from "../hooks/hooks";
import selectionFilter from "../utils/selection-filter";
import BrowseContainer from "../containers/BrowseContainer";

export default function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
}
