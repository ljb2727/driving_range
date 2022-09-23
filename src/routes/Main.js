import * as React from "react";
import Search from "components/main/Search";
import ResultList from "components/main/ResultList";

export default function ComboBox() {
  return (
    <>
      <Search />
      <ResultList />
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
