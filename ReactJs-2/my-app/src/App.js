import "./App.css";
// import Header from "./components/Header";
import User from "./components/User";
// const name = "Nazım";
// const surname = "Sarı";
// koşullu render etme işlemleri
// const isLoggedIn = false;
function App() {
  return (
    <div>
      <User
        name="Kamil"
        surname="Kamilovski"
        isLoggedIn={true}
        age={29}
        friend={["Ahmet", "Hakan", "Cemal", "Ayşe", "Fatma"]}
      />

      {/* <h1>Hello React</h1>
      <Header />
      <h1>
        {name} {surname}
      </h1>
      <h2>{`Benim adım ${name}, soyadım ${surname}`}</h2>
      <h2>
        {isLoggedIn
          ? `Benim adım ${name}, soyadım ${surname}`
          : "Giriş Yapmadınız."}
      </h2> */}
      {/* <h2>{isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}</h2>
      {!isLoggedIn && "Giriş Yapmadınız"} */}
    </div>
  );
}

export default App;
