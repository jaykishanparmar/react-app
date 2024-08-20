import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalContext'; // Import GlobalContext
import { getTodoList, getUserInfo, validateToken } from './helper'; // Import your API functions

const TodoList = () => {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  const [showLoader, setShowLoader] = useState(true);
  const [list, setList] = useState([]);
  const [showUser, setShowUser] = useState("");

  useEffect(() => {
    getTodoListAPI();
  }, []);

  const getTodoListAPI = async () => {
    try {
      const todos = await getTodoList(); 
      const userInfo = await getUserInfo(todos[3].id);

      // Ensure the token validation headers are correct
      const response = await validateToken(globalVariable);
      console.log(response);
      
      
      

      // Update state only after all async operations are done
      setGlobalVariable(response);
      setList(todos);
      setShowUser(userInfo);
      setShowLoader(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setShowLoader(false);
    }
  };

  const checkToken = async () => {
    const response = await validateToken(globalVariable);
    console.log(response);
    // Update state only after all async operations are done
    setGlobalVariable(response);
  };

  if (showLoader) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table border='1'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <button onClick={checkToken}>
                  Visit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
