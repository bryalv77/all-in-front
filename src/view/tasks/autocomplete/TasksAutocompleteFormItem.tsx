import React, { useState } from 'react';
import TasksService from '../../../modules/tasks/tasksService';
import TasksFormModal from '../../../view/tasks/form/TasksFormModal';
import AutocompleteInMemoryFormItem from '../../../view/shared/form/items/AutocompleteInMemoryFormItem';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from '../../../modules/tasks/tasksSelectors';

function TasksAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();

  const [modalVisible, setModalVisible] = useState(false);

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(
        name,
        [...(getValues()[name] || []), record],
        { shouldValidate: true, shouldDirty: true },
      );
    } else {
      setValue(name, record, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return TasksService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue.description) {
        label = originalValue.description;
      }

      return {
        key: value,
        value,
        label,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  return (
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
      />

      {modalVisible && (
        <TasksFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default TasksAutocompleteFormItem;
