import "./App.css";
import Home from "./pages/Home";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import styled from 'styled-components';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });

  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <Home />
      </AppContainer>
    </ApolloProvider>
  );
}

export default App;

const AppContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    border-bottom: 5px solid #8B9386;
`