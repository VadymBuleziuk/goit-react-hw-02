import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import css from "./App.module.css";
import Profile from "../Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import FriendList from "../FriendList/FriendLIst";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
