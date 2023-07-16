import React from 'react';

const ViewTeamTable = ({ teams }) => {
    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">CGPA</th>
                        <th className="px-4 py-2">Roll</th>
                        <th className="px-4 py-2">Batch</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <React.Fragment key={index}>
                            <tr className="bg-gray-200">
                                <td colSpan="1" className="px-4 py-2 font-bold">
                                    Team {index + 1}
                                </td>
                                <td colSpan="4" className="px-4 py-2 font-bold">
                                    Supervisor: {team.team_members[0].supervisor_name ? team.team_members[0].supervisor_name:" Not Assigned" }
                                </td>
                            </tr>
                            {team.team_members.map((member, memberIndex) => (
                                <tr key={member.team_members_id}>
                                    <td className="border px-4 py-2">{memberIndex + 1}</td>
                                    <td className="border px-4 py-2">{member.name}</td>
                                    <td className="border px-4 py-2">{member.cgpa}</td>
                                    <td className="border px-4 py-2">{member.roll}</td>
                                    <td className="border px-4 py-2">{member.batch}</td>
                                   
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>


        </>
    );
};

export default ViewTeamTable;