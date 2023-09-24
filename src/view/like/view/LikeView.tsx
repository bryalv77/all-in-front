import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import UserViewItem from 'src/view/user/view/UserViewItem';
import PostsViewItem from 'src/view/posts/view/PostsViewItem';

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
