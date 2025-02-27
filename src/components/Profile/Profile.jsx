import css from "./Profile.module.css";

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <>
      <p>Task 1</p>
      <div className={css.container}>
        <div className={css.card}>
          <img className={css.image} src={avatar} alt="User avatar" />
          <p className={css.title}>{username}</p>
          <p className={css.text}>{tag}</p>
          <p className={css.text}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.stat}>
            <span>Followers</span>
            <span className={css.title}>{followers}</span>
          </li>
          <li className={css.stat}>
            <span>Views</span>
            <span className={css.title}>{views}</span>
          </li>
          <li className={css.stat}>
            <span>Likes</span>
            <span className={css.title}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
