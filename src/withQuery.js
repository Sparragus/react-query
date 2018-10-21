import React from "react";

import Query from "./Query";

export default function withQuery({ name = "query", getData }) {
  return WrappedComponent => props => (
    <Query getData={() => getData(props)}>
      {queryState => {
        const queryProps = {
          [name]: queryState
        };

        return <WrappedComponent {...props} {...queryProps} />;
      }}
    </Query>
  );
}
