import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import UserViewItem from '../../../view/user/view/UserViewItem';
import PostsViewItem from '../../../view/posts/view/PostsViewItem';

function LikeView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.like.fields.userId')}
        value={record.userId}
      />

      <PostsViewItem
        label={i18n('entities.like.fields.postId')}
        value={record.postId}
      />
    </div>
  );
}

export default LikeView;
