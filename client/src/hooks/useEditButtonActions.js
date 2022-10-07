import {useState} from 'react';
import {getCurrentExchange} from '../api/getCurrentExchange';
import {useTasks} from '../Context/reducer';

export default function useEditButtonActions() {
    const [isEdit, setEdit] = useState(false);
    const {dispatch} = useTasks();

    const filterAction = {
        OPEN: 0,
        SAVE: 1,
        CLOSE: 2
    };

    const editButtonActions = [
        {
            id: filterAction.OPEN,
            text: 'Edit',
            onClick: (e, data, setEditRow, setRowId) => {
                getCurrentExchange(dispatch).then(_ => {
                    setRowId(data.id);
                    setEdit(true);
                    setEditRow(true);
                });
            },
            variant: 'outline-primary',
            style: {width: '100px'}
        },
        {
            id: filterAction.SAVE,
            text: 'Save',
            width: '50px',
            onClick: (e, data, setEditRow, setRowId, onEditTask) => {
                onEditTask(data);
                setEdit(false);
            },
            variant: 'outline-danger',
            style: {marginRight: '2px', width: '50px'}
        },
        {
            id: filterAction.CLOSE,
            text: 'Close',
            width: '50px',
            onClick: (
                e,
                data,
                setEditRow,
                setRowId,
                onEditTask,
                setHours,
                setNickname,
                setWallet,
                setFormSubmitted
            ) => {
                setRowId(null);
                setEdit(false);
                setEditRow(false);
                setHours(0);
                setNickname('');
                setWallet('');
                setFormSubmitted(true);
            },
            variant: 'outline-primary',
            style: {marginLeft: '2px', width: '50px'}
        }
    ];

    return {
        editButtonActions,
        isEdit,
        setEdit,
        filterAction
    };
}
