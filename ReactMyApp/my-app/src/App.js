import "./App.css";
import Contacts from "./components/Contacts";
// import User from "./components/User";
// import { useState } from "react";

// const name = "Nazım";
// const surname = "Sarı";
// const isLoggedIn = false;
// const friends = [
//   { name: "Ahmet", id: 1 },
//   { name: "Mehmet", id: 2 },
//   { name: "Hüseyin", id: 3 },
//   { name: "Kamil", id: 4 },
// ];
function App() {
  // const [name, setName] = useState("Kamil");
  // const [age, setAge] = useState(29);
  // const [friends, setFriends] = useState(["Kamil", "Mamil"]);

  return (
    <div className="App">
      {
        /* <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Conimoni")}>Change Name</button>
      <button onClick={() => setAge(38)}>Change Age</button>
      <hr />
      <br />

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>
        Add ner friend
      </button>
      <User
        name="Nazım"
        surname="Sarı"
        isLoggedIn={true}
        age={31}
        friends={friends}
      /> */
        <Contacts />
      }
    </div>
  );
}

export default App;
