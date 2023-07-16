import React from 'react';
import CreateRoom from './CreateRoom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import RoomTable from '../Teams/RoomTable';
import { openModal } from '../common/modalSlice';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import RoomTableAdmin from './RoomTableAdmin';

const CreateCommittee = () => {
    const [rooms, setRooms] = useState([])
    const [currentRoom, setCurrentRoom] = useState(null)
    const dispatch = useDispatch()

    const fetchRoomsData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/getCommitteeRooms');
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

  

    return (
        <>
            <CreateRoom fetchRoomsData={fetchRoomsData}></CreateRoom>
            <CommonTitleCard title="Rooms">
                <RoomTableAdmin rooms={rooms} fetchRoomsData={fetchRoomsData}></RoomTableAdmin>
            </CommonTitleCard>
        </>
    );
};

export default CreateCommittee;