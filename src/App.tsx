import './App.css'
import { useQuery } from 'react-query';


function App() {


  const fetchData = async (): Promise<any> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }


  const { data, status } = useQuery('todo', fetchData);



  return (
    <div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'error' && <div>Error</div>}
      {status === 'success' && (
        <ul>
          <li>{data.title}</li>
        </ul>
      )}
    </div>
  );



}

export default App
