import React from "react";
import bg from "public/assets/images/bg.jpg";

const App: React.FC = () => {
  console.log(document);

  return (
    <div>
      <h1>Hello from podval</h1>
      <img src={bg} alt="" width={300} />
    </div>
  );
};

export default App;
