import { useEffect, useState } from "react";



function Teams() {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('/api/team', {
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('jwt')
            }
        }).then(res => res.json()).then(res => setTeams(res));
    }, [])
    return (<h1>
        <table>
            <thead>
                <tr>
                    {teams.length > 0 ? Object.keys(teams[0]).map(k => <th>{k}</th>) : null}
                </tr>
            </thead>
            <tbody>
                {teams.map(team => <tr>{Object.values(team).map(v => <td>{v}</td>)}</tr>)}
            </tbody>
        </table>
    </h1 >)
}

export default Teams;