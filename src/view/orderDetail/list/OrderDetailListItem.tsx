import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import selectors from 'src/modules/orderDetail/orderDetailSelectors';

function OrderDetailListItem(props) {
  const hasPermissionToRead = useSelector(
    selectors.selectPermissionToRead,
  );

  const valueAsArray = () => {
    const { value } = props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  const displayableRecord = (record) => {
    if (hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link
            className="text-blue-500 dark:text-blue-400 focus:text-blue-400 hover:text-blue-400"
            to={`/order-detail/${record.id}`}
          >
            {record.id}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record.id}</div>;
  };

  if (!valueAsArray().length) {
    return null;
  }

  return (
    <>
      {valueAsArray().map((value) =>
        displayableRecord(value),
      )}
    </>
  );
}

OrderDetailListItem.propTypes = {
  value: PropTypes.any,
};

export default OrderDetailListItem;
