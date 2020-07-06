const command = "bash pecan/scripts/ws";
const refreshFrequency = false; // ms

const render = ({ output }) => <div class='screen'><div class='pecanworkspace'>{`${output}`}</div></div>;

export { command, refreshFrequency, render };
