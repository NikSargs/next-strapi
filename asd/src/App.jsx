// import "instantsearch.css/themes/algolia-min.css";
import React from "react";
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight
} from "react-instantsearch-dom";
import "./App.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const originalSearchClient = instantMeiliSearch(
  "http://localhost:34567",
  ""
);
const searchClient = {
  ...originalSearchClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0
        }))
      });
    }

    return originalSearchClient.search(requests);
  }
};

const App = () => {
  return(
    <div className="ais-InstantSearch">
      <h1>Restaurants Demo with Meilisearch</h1>
      <InstantSearch indexName="content-page" searchClient={searchClient}>
        <Stats />
          <SearchBox translations={{placeholder: 'hello'}}/>
          <InfiniteHits hitComponent={Hit} />

      </InstantSearch>
    </div>
)};

const Hit = ({ hit }) => {
  return (
    <>
    <div key={hit.id}>
    <div className="hit-name">
      <Highlight attribute="name" hit={hit} />
    </div>
      <p className="hit-categories"><Highlight attribute="categories" hit={hit} />{hit.Title}</p>
    </div>
  </>
  )
}

export default App;