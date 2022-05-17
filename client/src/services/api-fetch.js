
// TODO: Global
export const customFetch = fetch('/api/team', {
    headers: {
        'Authorization': window.localStorage.getItem('jwt')
    }
}).then(res => res.json()).then(res => setTeams(res));