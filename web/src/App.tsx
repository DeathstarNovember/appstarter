import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { CurrentUserQuery } from "./generated/graphql";
import "./App.css";

const currentUserQuery = gql`
  query CurrentUser($id: Int!, $condition: TallyCondition) {
    userById(id: $id) {
      id
      firstName
      lastName
      username
    }
    allTallies(condition: $condition) {
      nodes {
        id
        nodeId
        value
        category
        note
        userId
      }
    }
  }
`;

const App = () => {
  const { data, loading, error } = useQuery<CurrentUserQuery>(
    currentUserQuery,
    { variables: { id: 1, condition: { id: 1 } } }
  );
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (data?.allTallies?.nodes && data.userById) {
    const user = data.userById;
    const tallies = data.allTallies.nodes;
    const totalTalliesValue = tallies
      .map((tally) => (tally ? tally.value : 0))
      .reduce((total, tally) => total + tally, 0);
    return (
      <div>
        <div>TrackPoint</div>
        <div>{user?.username}</div>
        <div>Total Points: {totalTalliesValue}</div>
        <ul>
          {tallies.map((tally) => {
            return tally ? (
              <li key={tally.nodeId}>
                {tally.category}: {tally.value}
              </li>
            ) : null;
          })}
        </ul>
      </div>
    );
  }
  return <div>No Data Loaded</div>;
};

export default App;
