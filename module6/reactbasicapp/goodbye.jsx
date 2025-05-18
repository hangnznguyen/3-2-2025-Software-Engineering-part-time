function GoodBye() {

    const myownJSX = <h1>Good Bye!</h1>;
    const spiderman = { name: 'Spiderman', 
                       alterEgo: 'Peter Parker',
                     catchPhrase: 'With great power comes great responsibility' };

const spideyJSX = (<div>
                <h3>{spiderman.name}</h3>
                <blockquote>{spiderman.catchPhrase}</blockquote>
                <cite>{spiderman.alterEgo}</cite>
                 </div>);
    return (
        <>
            

                {myownJSX}
                {spideyJSX}
            
        </>
    );
  }
  export default GoodBye;