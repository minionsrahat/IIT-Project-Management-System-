import React from 'react';
import CreateRoom from '../create_committee/CreateRoom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RoomTable from './RoomTable';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';

const CreateTeam = () => {
    const [rooms,setRooms]=useState([])
    const fetchRoomsData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/getTeamRooms');
            const { rooms} = response.data
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
           <CommonTitleCard title="Rooms">
              <RoomTable rooms={rooms}></RoomTable>
            </CommonTitleCard>
        
        </>
    );
};

export default CreateTeam;