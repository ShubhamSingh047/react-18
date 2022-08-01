import React, { useEffect, useState } from "react";

const Dynamic = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((res) => {
        setUser(res);
        setLoading(false);
        setIsError(false);
      })
      .catch((error) => console.log(error));
  }, [user]);

  //print loading if true using ternary operator
  const printLoading = loading ? <div>Loading...</div> : null;
  //print error if true using ternary operator
  const printError = isError ? <div>Error</div> : null;
  //print data if true using ternary operator
  const printData = user.map((user) => {
    const { userId, id, title, body } = user;
    return (
      <div>
        <div>title</div>
        <div>body</div>
        <div>userId</div>
        <div>id</div>
      </div>
    );
  });

  return (
    <>
      <div>
        <h1>{printLoading}</h1>
        <h1>{printError}</h1>
        <h1>{printData}</h1>
      </div>
    </>
  );
};

export default Dynamic;
