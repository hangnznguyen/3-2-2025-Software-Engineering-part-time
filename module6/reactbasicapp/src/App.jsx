import { useState } from 'react';
import Emoji from '../EXERCISE3/Emoji.jsx';
import ComplexComment from '../ComplexComment.jsx';
import AddCatForm from '../EXERCISE5/AddCatForm.jsx';
import BigCats from '../EXERICISE2&4/BigCats.jsx';  
import FullName from '../FullName.jsx';
import City from '../City';
import GoodBye from '../goodbye';
import PropsDisplayer from '../PropsDisplay';
import Books from '../book';
import Welcome from '../Welcome';
import Greeting from '../EXEERCISE1/Greeting.jsx';
import Calculator from '../EXERCISE6/Calculator.jsx';

const initialCats = [
  {
    id: 1,
    name: 'Cheetah',
    latinName: 'Acinonyx jubatus',
    image: 'https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/1737487592842-KEDEP8489GIR48NABDLK/Rambo-JungleCat-2025.jpg?format=1000w'
  },
  {
    id: 2,
    name: 'Cougar',
    latinName: 'Puma concolor',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAAEGXmHKo1-FZTohit4rDP2YHvC5WJQDvS1zgNNNk9SGwZgpQf8uxBrCUL-ydQ0RuP8&usqp=CAU'
  },
  {
    id: 3,
    name: 'Jaguar',
    latinName: 'Panthera onca',
    image: 'https://c8.alamy.com/comp/FYHAJY/jungle-cat-felis-chaus-in-the-wild-sometimes-called-reed-cat-or-swamp-FYHAJY.jpg'
  },
  {
    id: 4,
    name: 'Leopard',
    latinName: 'Panthera pardus',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfZfhr3WSKzeQbtVqbQMQ_hgPBlPtIZTqLOTh22M0UJDGdjVNwKdtpQPfm3IHTaWEejk&usqp=CAU'
  },
  {
    id: 5,
    name: 'Lion',
    latinName: 'Panthera leo',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGO7AgSxcfFzNI6_Q7hh5KChEtbxg6Wi72YKeWfN1HRV-G1xzC-576tDyaWAk7Pi3jE7g&usqp=CAU'
  },
  {
    id: 6,
    name: 'Snow leopard',
    latinName: 'Panthera uncia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQH4WQNNJMK_74NK87u8Qy9LBY94L3BwNZBZoWkC4I4U3hB2Uswhb7bltmcH7L8zBd7EM&usqp=CAU'
  },
  {
    id: 7,
    name: 'Tiger',
    latinName: 'Panthera tigris',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQ24lwpoi-w-VELrzh2niqK90QIlq8kNH7j2h4t3vINjrGfobjoE1arMJBXvGpnJ9n8s&usqp=CAU'
  }
];

function App() {
  const [cats, setCats] = useState(initialCats);

  const addCat = (cat) => {
    const newCat = { ...cat, id: Date.now() };
    setCats(prev => [...prev, newCat]);
  };

  const deleteCat = (id) => {
    setCats(prev => prev.filter(cat => cat.id !== id));
  };

  const sortAZ = () => {
    const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name));
    setCats(sorted);
  };

  const reverseList = () => {
    const reversed = [...cats].reverse();
    setCats(reversed);
  };

  const filterPanthera = () => {
    const filtered = initialCats.filter(cat => cat.latinName.includes('Panthera'));
    setCats(filtered);
  };

  const resetList = () => {
    setCats(initialCats);
  };

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <>
<Calculator></Calculator>
      <Emoji />
      <ComplexComment
        author={comment.author}
        text={comment.text}
        date={comment.date}
      />

      <div>
        <h1>Big Cat Gallery</h1>
        <AddCatForm onAddCat={addCat} />
        <BigCats
          cats={cats}
          onDeleteCat={deleteCat}
          onSortAZ={sortAZ}
          onReverse={reverseList}
          onFilterPanthera={filterPanthera}
          onReset={resetList}
        />
      </div>

      {/* Extra UI components for practice */}
      <FullName firstName="John" lastName="Doe" />
      <FullName firstName="Jane" lastName="Smith" />

      <City name="sydney" />
      <City name="melbourne" state="VIC" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="New Castle">
        <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
        <div><strong>Population:</strong> 322,278 (2016)</div>
      </City>

      <div>
        <h1>Hello, this is my first React application</h1>
      </div>

      <button>Click</button>

      <div>
        <h3>Footer of my webpage</h3>
      </div>

      <GoodBye>
        <p>First piece of JSX</p>
      </GoodBye>

      <PropsDisplayer />
      <PropsDisplayer myProp="first prop" />
      <PropsDisplayer prop1="first" prop2="second" prop3={3} />
      <PropsDisplayer name="Harry Styles" age={29} />
      <PropsDisplayer pets={["cat", "dog", "goldfish"]} />

      <Books name="educational" usedBy="teacher" />
      <Books name="entertainment" usedBy="students" />
      <Books name="Drama" usedBy="Artist" />

      <Welcome name="John" />
      <Greeting name="John">Welcome to our website</Greeting>
      <Greeting>Have a nice day</Greeting>
    </>
  );
}

export default App;