// MIT License

function reflex_agent(location, state){
    if (state === "DIRTY") return "CLEAN";
    else if (location === "A") return "RIGHT";
    else if (location === "B") return "LEFT";
}

function test(states){
    const location = states[0];
    const state = states[0] === "A" ? states[1] : states[2];
    const action_result = reflex_agent(location, state);
    document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" - ").concat(states);
    if (action_result === "CLEAN"){
        if (location === "A") states[1] = "CLEAN";
        else if (location === "B") states[2] = "CLEAN";
    }
    else if (action_result === "RIGHT") states[0] = "B";
    else if (action_result === "LEFT") states[0] = "A";
	
    setTimeout(function(){ test(states); }, 2000);
}

const states = ["A", "DIRTY", "DIRTY"];
test(states);