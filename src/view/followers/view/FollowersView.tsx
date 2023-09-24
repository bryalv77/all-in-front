import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import UserViewItem from 'src/view/user/view/UserViewItem';

function FollowersView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.followers.fields.userId')}
        value={record.userId}
      />

      <UserViewItem
        label={i18n('entities.followers.fields.followerId')}
        value={record.followerId}
      />
    </div>
  );
}

export default FollowersView;
