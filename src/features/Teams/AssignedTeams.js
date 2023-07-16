import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ViewTeamTable from './ViewTeamTable';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';

const AssignedTeams = () => {
    const [teams, setTeams] = useState([])
    const user_id = localStorage.getItem("user_id")
    const fetchRoomsData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/get_team_info_by_supervisor_Id', {
                supervisor_id: user_id,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const { teams } = response.data
            setTeams(teams)
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
            {
                teams &&
                <CommonTitleCard title={"Teams Information"}>
                    <ViewTeamTable teams={teams}></ViewTeamTable>
                </CommonTitleCard>
            }

        </>
    );
};

export default AssignedTeams;