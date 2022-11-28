import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.warn("Cong viec da them truoc do")
    } else {
      setTodos(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }])
      setWork('');
    }

  }

  const handleDelete = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen border border-red-500">
        <div className='flex gap-4 '>
          <input type="text"
            className="outline-none border border-blue-400 px-4 py-2 w-[400px]"
            value={work}
            onChange={e => setWork(e.target.value)}
          />
          <button className="outline-none px-4 py-2 bg-blue-400 rounded-md text-white"
            onClick={handleAdd} >
            Add
          </button>
        </div>
        <div>
          <h3 className='flex gap-4'>
            Content
          </h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li className='flex gap-10 items-center' key={item.id}>
                  <span className='my-2'>{item.job}</span>
                  <span onClick={() => handleDelete(item.id)} className='my-2 cursor-pointer p-2'>X</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /></>
  );
}

export default App;
