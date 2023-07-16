import React from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import AddTeacherInput from './AddTeacherInput';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import TeachersTable from './TeachersTable';

const Teacher = () => {
    const [teachers,setTeachers]=useState(null)


    const fetchTeachersData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/getTeachers');
            const { teachers} = response.data
            setTeachers(teachers)
            // setRooms(rooms)
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };
    useEffect(() => {
        fetchTeachersData();
    }, []);
    
    return (
        <>
       <CommonTitleCard title={"Add Teachers"}>
        <AddTeacherInput fetchTeachersData={fetchTeachersData}>
        </AddTeacherInput>
        </CommonTitleCard> 
        <CommonTitleCard>
            {
                teachers &&
                <TeachersTable teachers={teachers} fetchTeachersData={fetchTeachersData}></TeachersTable>
            }
        </CommonTitleCard>
        </>
    );
};

export default Teacher;