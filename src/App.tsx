import React, { useState } from "react";
import LoginView from "./views/login";
import styles from "./App.module.scss";

function App(): React.ReactElement {
  return (
    <div className={styles.App}>
      <LoginView />
    </div>
  );
}

export default App;
