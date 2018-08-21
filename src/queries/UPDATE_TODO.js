import { gql } from 'apollo-boost';

export default gql`
 
mutation updateTodo($completed: Boolean!, $id: ID!) {
    updateTodo(
      data: {
        completed: $completed
      }
      where: {
        id: $id
      }
    ) {
      id
      title
      completed
    }
  }
`;
