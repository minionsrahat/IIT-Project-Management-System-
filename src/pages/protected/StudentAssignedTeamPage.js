import React from 'react';
import { useEffect } from 'react';
import { setPageTitle } from '../../features/common/headerSlice';
import { useDispatch } from 'react-redux';
import StudentAssignedTeam from '../../features/Teams/StudentAssignedTeam';

const StudentAssignedTeamPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Your Team Information"}))
      }, [])
    return (
      <StudentAssignedTeam></StudentAssignedTeam>
    );
};

export default StudentAssignedTeamPage;