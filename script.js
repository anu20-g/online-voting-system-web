let votes = [0, 0];
function vote(id) {
    votes[id]++;
    document.getElementById('v' + id).textContent = votes[id];
    alert('Thank you! Your vote has been officially tallied.');
}