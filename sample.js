//tamil
function getData() {
    return Promise.all([
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvdGFtaWxMb2NhbC5tM3U=")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL3lvdXR1YmVfbTN1L3RhbWlsLm0zdQ==")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvdGFtaWxfc2F0ZWxsaXRlX3R2Lm0zdQ==")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvdGFtaWxfaXB0di5tM3U=")).then(resp => resp.text())
    ]).then(allResponses => {
        return allResponses;
    }).catch(err => {
        return err;
    });
}


//malayalam
function getData() {
    return Promise.all([
        //fetch(atob("aHR0cHM6Ly9pcHR2LW9yZy5naXRodWIuaW8vaXB0di9sYW5ndWFnZXMvbWFsLm0zdQ==")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL3lvdXR1YmVfbTN1L21hbGF5YWxhbS5tM3U=")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvbWFsYXlhbGFtLm0zdQ==")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvbWFsYXlhbGFtX3NhdGVsbGl0ZV90di5tM3U=")).then(resp => resp.text())
    ]).then(allResponses => {
        return allResponses;
    }).catch(err => {
        return err;
    });
}

//lang db
function getData() {
    return fetch(atob("aHR0cHM6Ly9pcHR2LW9yZy5naXRodWIuaW8vaXB0di9pbmRleC5sYW5ndWFnZS5tM3U="))
        .then(resp => resp.text())
        .then(allResponses => {
            return allResponses;
        }).catch(err => {
            return err;
        });
}

// languages
function getData() {
    return fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvaW5kZXgubGFuZ3VhZ2UubTN1"))
        .then(resp => resp.text())
        .then(allResponses => {
            return allResponses;
        }).catch(err => {
            return err;
        });
}

//xxx
function getData() {
    return fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYveHN0cmVhbS5tM3U="))
        .then(resp => resp.text())
        .then(allResponses => {
            return allResponses;
        }).catch(err => {
            return err;
        });
}


function getData() {
    return Promise.all([
        fetch(atob("aHR0cHM6Ly9pcHR2LW9yZy5naXRodWIuaW8vaXB0di9jYXRlZ29yaWVzL3h4eC5tM3U=")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9pcHR2LW9yZy5naXRodWIuaW8vaXB0di9sYW5ndWFnZXMvbWFsLm0zdQ==")).then(resp => resp.text()),
        fetch(atob("aHR0cHM6Ly9wcmFzYW50aC1zbmsuZ2l0aHViLmlvL2lwdHYvbWFsYXlhbGFtLm0zdQ==")).then(resp => resp.text())
    ]).then(allResponses => {
        return allResponses;
    }).catch(err => {
        return err;
    });
}

