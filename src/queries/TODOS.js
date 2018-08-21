import { gql } from 'apollo-boost';

export default gql`
    query todoes {
        todoes {
            id
            title
            completed
        }
    }
`;
