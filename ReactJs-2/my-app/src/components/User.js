function User({ name, surname, isLoggedIn, age, friends }) {
  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız"}</h1>
    </>
  );
}
export default User;
