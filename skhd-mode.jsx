const command = "cat ~/.config/skhd/mode";
const refreshFrequency = false; // ms

const render = ({ output }) => <div class='screen'><div class='pecanmode'><div class='modeportal'> {`${output}`}</div></div></div>;

export { command, refreshFrequency, render };
