import { gql } from 'apollo-boost';

export default gql`
    query allTodos {
        allTodos(count: 10) {
            id
            title
            completed
        }
    }
`;
