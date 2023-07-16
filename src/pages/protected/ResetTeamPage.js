import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import ResetTeam from '../../features/reset_features/ResetTeam';

const ResetTeamPage = () => {

    

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Reset Teams" }))
    }, [])

    return (
        <>
            <ResetTeam></ResetTeam>
        </>
    );
};

export default ResetTeamPage;