import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({
  allFriends: { avatar, name, isOnline },
}) {
  const statusClsx = clsx(isOnline ? css.green : css.red);
  return (
    <div className={css.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.title}>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
