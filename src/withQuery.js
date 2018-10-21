import React from "react";

import Query from "./Query";

export default function withQuery(query, options = { name: "query" }) {
  return WrappedComponent => props => (
    <Query query={() => query(props)}>
      {queryState => {
        const queryProps = {
          [options.name]: queryState
        };

        return <WrappedComponent {...props} {...queryProps} />;
      }}
    </Query>
  );
}
