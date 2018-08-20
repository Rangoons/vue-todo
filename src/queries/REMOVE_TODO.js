import { gql } from 'apollo-boost';

export default gql`
    mutation createTodo($title: String!) {
        createTodo(title: $title) {
            id
            title
            completed
        }
    }
`;
