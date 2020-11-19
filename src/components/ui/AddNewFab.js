import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    const dispatch = useDispatch();
    const { activeEvent } = useSelector(state => state.calendar);

    const handlePlusClick = () => {
        dispatch(uiOpenModal());
    }

    return (
        <button className="btn btn-primary fab" disabled={activeEvent} onClick={handlePlusClick}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
