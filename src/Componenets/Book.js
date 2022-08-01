import React from "react";

const name = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
];

function Book() {
  return (
    <div>
      <p>
        {name.map((name) => {
          const { userId, id, title, body } = name;
          return (
            <div key={id} className="box">
              <h3>{title}</h3>
              <p>{body}</p>
              <p>Id:- {userId}</p>
            </div>
          );
        })}
      </p>
    </div>
  );
}

export default Book;
