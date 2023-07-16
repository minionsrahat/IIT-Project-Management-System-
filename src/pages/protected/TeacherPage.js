import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../features/common/headerSlice';
import Teacher from '../../features/teachers';

const TeacherPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title : "Teacher Mangement"}))
      }, [])

    return (
       <Teacher></Teacher>
    );
};

export default TeacherPage;