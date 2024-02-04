import './App.css';

import { useState } from 'react';
import { useGetProductsQuery, useCreateArticleMutation } from './Services/API';
import MyButton from './Components/MyButton';
import MyInput from './Components/MyInput';

function Header() {

  let { data, isLoading } = useGetProductsQuery()

  if (isLoading) {
    return <div></div>
  }

  return (
    <div>
      <h1>There is {data.length} article</h1>
      <hr />
    </div>
  )
}

function App() {
  const [dataUser, setDataUser] = useState({ email: '', name: '', firstname: '' });

  const onClickEvent = () => {
    console.log(dataUser)
  }

  const onInputChange = (e) => {
    dataUser[e.target.id] = e.target.value
    setDataUser(dataUser)
  }

  let { data, isLoading } = useGetProductsQuery()
  let [ createArticle ] = useCreateArticleMutation() 

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {
          !isLoading ?
            data.slice().reverse().map((article) => {
              return <div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
              </div>
            }) :
            <span>Loading...</span>
        }
        <button onClick={() => {
          createArticle({ title: "Hello World Test", content: "Content of Hello World Test" })
          }}
        >
          Create Article
        </button>
        <MyButton labelBtn="TEST" onClickEvent={onClickEvent}/>
        <MyInput id="name" typeOfInput="text" placeholder="Nom" onChangeEvent={onInputChange}/>
        <MyInput id="firstname" typeOfInput="text" placeholder="Prénom" onChangeEvent={onInputChange}/>
        <MyInput id="email" typeOfInput="text" placeholder="Email" onChangeEvent={onInputChange}/>
        <MyInput id="password" typeOfInput="password" placeholder="Mot de passe" onChangeEvent={onInputChange}/>
        {dataUser.email !== '' ? <p>{dataUser.email}</p> : null}
      </header>
    </div>
  );
}

export default App;
