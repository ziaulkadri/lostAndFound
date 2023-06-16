import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>Lost and Found </h1>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </div>
      <main>
        <h1 style={{ textAlign: "center", marginBottom: "500px" }}>
          Have you Lost Something?
        </h1>
      </main>
      {/* <footer>
		<h1 style={{textAlign: 'center'}}>Found nothing check again leter.</h1>
		</footer> */}
      {/* <footer>
		<h1 style={{textAlign: 'center'}}>Found nothing check again leter.</h1>
		</footer> */}
    </>
  );
};

export default Main;
