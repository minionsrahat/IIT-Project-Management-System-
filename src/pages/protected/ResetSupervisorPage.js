import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import ResetSupervisor from '../../features/reset_features/ResetSupervisor';

const ResetSupervisorPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Reset Teams" }))
    }, [])

    return (
        <>
            <ResetSupervisor></ResetSupervisor>
        </>
    );
};

export default ResetSupervisorPage;