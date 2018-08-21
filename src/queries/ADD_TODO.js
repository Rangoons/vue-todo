import { gql } from 'apollo-boost';

export default gql`
    mutation createTodo($title: String!, $completed: Boolean) {
        createTodo(data: {title: $title, completed: $completed}) {
            id
            title
            completed
        }
    }
`;
