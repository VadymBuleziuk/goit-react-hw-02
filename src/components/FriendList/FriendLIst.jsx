import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendLIst.module.css";

export default function FriendList({ friends }) {
  return (
    <>
      <p>Task 2</p>
      <ul className={css.container}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem allFriends={friend} />
          </li>
        ))}
      </ul>
    </>
  );
}
