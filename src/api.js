import { createHttpLink } from 'apollo-link-http';
import { gql } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import 'babel-polyfill';

const httpLink = createHttpLink({
  uri: 'https://api.spacex.land/graphql/',
  headers: {
      authorization: 'Bearer MY_TOKEN',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  }
});

function Api() {
  async function fetchedData(params) {
    const fetched = await client.query({
      query: gql`
        query {
          launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
            }
            rocket {
              rocket_name
              first_stage {
                cores {
                  flight
                  core {
                    reuse_count
                    status
                  }
                }
              }
              second_stage {
                payloads {
                  payload_type
                  payload_mass_kg
                  payload_mass_lbs
                }
              }
            }
            ships {
              name
              home_port
              image
            }
          }
        }
        `,
      fetchPolicy: "network-only",
      variables: null
    });
    return fetched;
  }
  
}

export default Api;


