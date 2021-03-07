const command = "bash pecan/scripts/spotify.sh | python3 pecan/scripts/spotify.py";
const refreshFrequency = 10000; // ms

const render = ({ output }) => <div class='screen'><div class='pecanspotify'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
