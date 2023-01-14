import { useContext } from "react";
import "../../stylesheet/_mobile.scss";

import { UsersContext } from "../../context/context";

const Mobile = () => {
  const [users] = useContext(UsersContext);

  return (
    <div className="mobile">
      <div className="mobile__user-list">
        {users.map((user, index) => {
          return (
            <div className="user" key={user.id}>
              <h2 className="user__heading">
                <span className="num">{index + 1}.</span>
                {user.userName}
              </h2>
              <div className="user__info">
                <div className="data">
                  <h3 className="data__cell data__cell--name">Email: </h3>
                  <h3 className="data__cell data__cell--value">{user.email}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobile;
