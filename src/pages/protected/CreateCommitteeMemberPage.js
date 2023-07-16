import React from 'react';
import AddCommitteeMember from '../../features/create_committee/AddCommitteeMember';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { useEffect } from 'react';

const CreateCommitteeMemberPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Add Committe Members"}))
      }, [])
    return (
       <>
       <AddCommitteeMember></AddCommitteeMember>
       </>
    );
};

export default CreateCommitteeMemberPage;