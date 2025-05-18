import { useState } from 'react';

// Assets & styles
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Components
import HelloWorld from '../HelloWorld';
import GoodBye from '../goodbye';
import Books from '../book';
import BookList from '../booklist';
import Greeting from '../EXEERCISE1/Greeting.jsx';
import Welcome from '../Welcome';
import PropsDisplayer from '../PropsDisplay';
import City from '../City';
import FullName from '../FullName.jsx';
import ComplexComment from '../ComplexComment.jsx';
import UserInfo from '../UserInfo.jsx';
import MoviesList from '../MoviesList.jsx';
import BigCats from '../EXERICISE2&4/BigCats.jsx';
import Emoji from '../EXERCISE3/Emoji.jsx';

// Static data
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

const movies = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function App() {
  return (
    <>
      {/* Emoji and Big Cats Components */}
      <Emoji />
      <BigCats />

      {/* Movies List */}
      <MoviesList movies={movies} />

      {/* Complex Comment */}
      <ComplexComment 
        author={comment.author} 
        text={comment.text} 
        date={comment.date} 
      />

      {/* FullName Examples */}
      <FullName firstName="John" lastName="Doe" />
      <FullName firstName="Jane" lastName="Smith" />

      {/* City Components with children */}
      <City name="sydney" />
      <City name="melbourne" state="VIC" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="New Castle">
        <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
        <div><strong>Population:</strong> 322,278 (2016)</div>
      </City>

      {/* Basic HTML structure */}
      <div>
        <h1>Hello, this is my first React application</h1>
      </div>

      <button>Click</button>

      <div>
        <h3>Footer of my webpage</h3>
      </div>

      {/* GoodBye with children */}
      <GoodBye> 
        <p>First piece of JSX</p>
      </GoodBye>

      {/* PropsDisplayer examples */}
      <PropsDisplayer />
      <PropsDisplayer myProp="first prop" />
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />
      <PropsDisplayer name="Harry Styles" age={29} />
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />

      {/* Books Components */}
      <Books name="educational" usedBy="teacher" />
      <Books name="entertainment" usedBy="students" />
      <Books name="Drama" usedBy="Artist" />

      {/* Welcome & Greeting Examples */}
      <Welcome name="John" />
      <Greeting name="John">Welcome to our website</Greeting>
      <Greeting>Have a nice day</Greeting>
    </>
  );
}

export default App;