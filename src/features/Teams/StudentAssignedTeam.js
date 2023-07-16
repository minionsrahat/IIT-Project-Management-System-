import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CommonTitleCard from '../../components/Cards/CommonTitleCard';
import ViewTeamTable from './ViewTeamTable';

const StudentAssignedTeam = () => {
    const [teams, setTeams] = useState([])
    const student_id = localStorage.getItem("user_id")
    const fetchRoomsData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/get_team_info_by_roll', {
                student_id: student_id,
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

export default StudentAssignedTeam;