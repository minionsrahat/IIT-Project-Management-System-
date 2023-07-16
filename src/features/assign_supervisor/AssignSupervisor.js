import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import ViewTeamTable from '../Teams/ViewTeamTable';
import { useDispatch } from 'react-redux';
import { MODAL_BODY_TYPES } from '../../utils/globalConstantUtil';
import { openModal } from '../common/modalSlice';
import RoomTableForAssignSupervisor from './RoomTableForAssignSupervisor';

const AssignSupervisor = () => {
    const [rooms,setRooms]=useState([])
    const [teams, setTeams] = useState(null);
    const [room_id, setRoomID] = useState(null);
    const dispatch = useDispatch()

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



    const get_teams_info = async (roomId) => {
        setRoomID(roomId)
        console.log("RoomId:", roomId)
        let response;
        try {

            response = await axios.post('http://127.0.0.1:5000/api/get_team_info', {
                room_id: roomId,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { error, message, teams } = response.data
            if (!error) {
                setTeams(teams)
                fetchRoomsData();
            }
        } catch (error) {
            console.error(error);

        }
    }

    const assignSupervisor = async (room_id) => {
        let response;
        if (room_id) {
            try {

                response = await axios.post('http://127.0.0.1:5000/api/assign_supervisor', {
                    room_id: room_id,
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const { error, message, teams } = response.data
                if (!error) {
                    dispatch(openModal({ title: "Success", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW, error: false, errormsg: message }))
                    get_teams_info(room_id)
                }
            } catch (error) {
                console.error(error);

            }
        }


    }

    return (
        <>
             <CommonTitleCard title="Rooms">
              <RoomTableForAssignSupervisor rooms={rooms} get_teams_info={get_teams_info}></RoomTableForAssignSupervisor>
            </CommonTitleCard>
            {
                teams &&
                <CommonTitleCard title={"Teams Information"}>
                    <div className="text-center">
                    <button className='btn btn-primary my-3' onClick={()=>assignSupervisor(room_id)}>Assign Supervisor</button>
                    </div>
                    <ViewTeamTable teams={teams}></ViewTeamTable>
                </CommonTitleCard>
            }
        </>
    );
};

export default AssignSupervisor;