import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import ResetTeamTable from './ResetTeamTable';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import ResetSupervisorTable from './ResetSupervisorTable';

const ResetSupervisor = () => {
    const [rooms, setRooms] = useState([])
    const dispatch = useDispatch()

    const fetchRoomsData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/get_supervisor_assign_rooms');
            const { rooms } = response.data
            setRooms(rooms)
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    useEffect(() => {
        fetchRoomsData();
    }, []);

    const unlockTeams = async (room_id) => {
        try {
            const response = await axios.put(`http://127.0.0.1:5000/api/resetSupervisor/${room_id}`);
            // Perform any additional actions after successful deletion
            const { error, message, rowsAffected } = response.data; // Return the response data
            if (!error) {
                fetchRoomsData()
                dispatch(openModal({ title: "Success", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW, error: false, errormsg: message }))
            }
        } catch (error) {
            console.error('Error deleting room:', error);

        }
    };

    return (
        <>
            <CommonTitleCard title="Rooms">
                <ResetSupervisorTable rooms={rooms} unlockTeams={unlockTeams}></ResetSupervisorTable>
            </CommonTitleCard>
        </>
    );
};

export default ResetSupervisor;