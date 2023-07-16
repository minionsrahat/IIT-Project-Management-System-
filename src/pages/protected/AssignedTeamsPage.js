import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import AssignedTeams from '../../features/Teams/AssignedTeams';

const AssignedTeamsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "View Assigned Teams"}))
      }, [])
    return (
       <>
       <AssignedTeams></AssignedTeams>
       </>
    );
};

export default AssignedTeamsPage;