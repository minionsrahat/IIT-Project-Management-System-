import React from 'react';

const TeamTable = ({ teams }) => {
    return (
        <>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">GPA</th>
                        <th className="px-4 py-2">Roll</th>
                        <th className="px-4 py-2">Batch</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <React.Fragment key={index}>
                            <tr className="bg-gray-200">
                                <td colSpan="5" className="px-4 py-2 font-bold">
                                    Team {index + 1}
                                </td>
                            </tr>
                            {team.map((student, studentIndex) => (
                                <tr key={studentIndex}>
                                    <td className="border px-4 py-2">{studentIndex + 1}</td>
                                    <td className="border px-4 py-2">{student.name}</td>
                                    <td className="border px-4 py-2">{student.gpa}</td>
                                    <td className="border px-4 py-2">{student.roll}</td>
                                    <td className="border px-4 py-2">{student.batch}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>

        </>
    );
};

export default TeamTable;