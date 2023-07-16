import React from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import { useState } from 'react';
import axios from 'axios';
import ViewTeamTable from './ViewTeamTable';
import RoomSelectionSelectBox from './Utilities/RoomSelectionSelectBox';

const ViewTeam = () => {

    const [teams, setTeams] = useState(null);

    const handleFormSubmit = async (course, batch) => {

        let response;
        try {
            response = await axios.post('http://127.0.0.1:5000/api/getRoomId', {
                batch_no: batch,
                course_type: course
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { error, message, roomId } = response.data
            if (!error) {
                get_teams_info(roomId)
            }
        } catch (error) {
            console.error(error);

        }
    }

    const get_teams_info = async (roomId) => {
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
                // setRoomCreated(true)
                // setRoomId(roomId)
            }
        } catch (error) {
            console.error(error);

        }
    }


    return (
        <>
            <CommonTitleCard title="View Created Team">
                <RoomSelectionSelectBox handleFormSubmit={handleFormSubmit}></RoomSelectionSelectBox>
            </CommonTitleCard>
            {
                teams &&
                <CommonTitleCard title={"Teams Information"}>
                    <ViewTeamTable teams={teams}></ViewTeamTable>
                </CommonTitleCard>
            }
        </>
    );
};

export default ViewTeam;