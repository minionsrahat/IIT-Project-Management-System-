import React from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import { useEffect } from 'react';
import CreateCommittee from '../../features/create_committee/CreateCommittee';

const CreateCommitteePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Create Committee"}))
      }, [])


    return (
       <>
       <CreateCommittee></CreateCommittee>
       </>
    );
};

export default CreateCommitteePage;