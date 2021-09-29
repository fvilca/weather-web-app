import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import {BrowserRouter as Router}from 'react-router-dom'
import useFetch from '../src/hooks/useFetch'

export default function Test() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

  return (
    <div>
      <input  onChange={({target})=>target.value&&setId(target.value)} />
      <div>{id}</div>
      <button onClick={() => setId(currentId => currentId + 1)}>
        Increment ID
      </button>
      <div>Loading: {loading.toString()}</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
    </div>
  )
}


ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);

