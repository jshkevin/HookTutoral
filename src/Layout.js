import { useEffect, useState, useLayoutEffect } from "react";

function Layout() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  
  // useEffect(() => {
  //   setAge(21);
  //   setName("hyuk");
  // }, []);

  useLayoutEffect(() => {
    setAge(21);
    setName("hyuk");
  }, []);

  
  return (
    <>
      <div>{`나는 ${name} 이고, 나이는 ${age}살 입니다.`}</div>
    </>
  );
}

export default Layout;