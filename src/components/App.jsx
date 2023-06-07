import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friends/Friend-list';
import TransactionHistory from './transactions/Transaction-history';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50 + 'px',
        paddingTop: 70 + 'px',
        paddingBottom: 70 + 'px',
        backgroundColor: '#E4EDE6',
        // fontSize: 20,
        color: '#010101',
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
