import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

// import username from "./data/user";
// import tag from "./data/user";
// import location from "./data/user";
// import avatar from "./data/user";
// import stats from "./data/user";
import user from './data/user';
import data from './data/data';
import friends from './data/friends';




export const App = () => {
  // return (
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  // );
   const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </>
  );
};
