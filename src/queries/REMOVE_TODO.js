import { gql } from 'apollo-boost';

export default gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(where: {
            id: $id
        }) {
            id
            title
            completed
        }
    }
`;
