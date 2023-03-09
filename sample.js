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



jiotoken
function getData() {
    const bodyobj = {};
    const fetchOpts = {
        method: "POST",
        headers: {
            "appkey": "NzNiMDhlYzQyNjJm",
            "devicetype": "phone",
            "os": "android",
            "deviceId": "3c6d6b5702fa09bd",
            "channel_id": channelId,
            "accesstoken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImF1dGhUb2tlbklkIjoiYmM0MGY2MzctZjExMy00NzI2LTllNGEtZmNmYmZhNWUzMGUyIiwidXNlcklkIjoiNDcwYzlkOTgtYjRlNy00N2JjLWFkNjAtNGM5MmMwMGEwYzRkIiwidXNlclR5cGUiOiJKSU8iLCJvcyI6ImFuZHJvaWQiLCJkZXZpY2VUeXBlIjoicGhvbmUiLCJhY2Nlc3NMZXZlbCI6IjkiLCJkZXZpY2VJZCI6IjNjNmQ2YjU3MDJmYTA5YmQiLCJleHRyYSI6IntcIm51bWJlclwiOlwiNDdnbGluK2hxRzZrYWh6Z1RtMFV0dDZVOE03b040eDBLZjJvdlpsbnJMZTZGbTU0RHQ4U0hVaz1cIixcInBsYW5kZXRhaWxzXCI6e1wiUGFja2FnZUluZm9cIjpbe1wicGxhbmlkXCI6XCIxXCIsXCJzdWJzY3JpcHRpb25zdGFydFwiOjE2NjA3MDEyMDQsXCJzdWJzY3JpcHRpb25lbmRcIjoxNjkyMjM3MjA0LFwicGxhbnR5cGVcIjpcInByZW1pdW1cIixcImJ1c2luZXNzVHlwZVwiOlwiamlvXCIsXCJpc2FjdGl2ZVwiOnRydWUsXCJub3Rlc1wiOlwiXCJ9XX0sXCJqVG9rZW5cIjpcIjQwOTkyYWU4OWY1MTNhZDFlYjgyYTA1YWYwNDg1ZTgwLjQ0ZTkxZWRlOTAyOTI2OTViMzAwOTQ4MzU4OTU5OWY2OGQzYzQyODlkN2EyYzlhMTVhYzIyZmM0ZWIwYjNlMjExZWUzZjAzNDg2MjZhNjk3MDU0YTg0MjgwMGM5NDU5NTUxYjFiNzJkNGE3OTc5NWUxZDcwYjkzNDY0OWUwMzFjY2MxMmNhZmZiNzUxMzRmZTQ5MzI3ODAyM2I2YzBjNDA3OGMwYWUzYjljNWI1N2NlN2Q2MDNmMmM0MDI0MWM2ZjQ1YmQ0NTMwYzY2OGI2OGU2MDQyOGIzYTA5YjIxNDQ4MjY0ZmIxMzFiZDU5OWMxMThjNDlkZjhkMzYyM2I3NjUzNmRkNWNiNGQyNTQ4Mzc0ZDJlNGM4M2ViMWZmZDM1NDg3Yzc0MDZkZDk4ZmIyOTRhNGE0NTIwZTA4NTg0MWZhZDE0ZTU3MWU0NGUyYzRhN2Q3MmE3OWVjZTIwOTIyM2IwNmYwMGRlOTI1MGVlNDMyMzczNWRiNDYxZDc1MDY3ODFjYjEzNTM4Yjk0MTg3YjYyOGFjOGQzMDljMmYyMjE2NjlkOGM3OTBkZmE0OWUzM2E3NGRjOWI3ZDJlM2NlMThmNDM5N2U2N2I0YjAxOWNjYzk1MWNmOGIxOWFiZWFhNDA2MDBmMDU4ZGViMWViNzc1ODUwMGFhOTgxZWI5ZTNlMmQzOGM5OTk5NmE4MmY1ZDNjZjc4ZGFiN2M0ZGZjM2MyYTVmMzkzNDhmNTA3NzNhMTdkMzBmYTBkMDliOGM5ZDRhNTJmODY1ZmRkMjJlYmMyNDU4OGUwNTlhM2JkNzBkYTY1ODFkZWZkMTQ4ZGI2ZDQ5MDNmNDAyZTc0ZGY0MGM5N2QzOTA1OWFjZGJlODlhNDZjZDhlMTQzODM0OTc0N2FmOTY5ZGNhNzIwMWI1ZTRkNTExYzQ5ZDc5ZWQzMmU5XCIsXCJ1c2VyRGV0YWlsc1wiOlwiS1hlMW5Da09hN29oV0dkRHFBMlJuVmxzV1RJNTFtV1FVRHdUZHpRVFQyZ3o2L285MERDQm8wZDJmd0FzOUg2Tzl6RndWbDhtYkJvby91eHBCTStkSngrdlRjVmpFWVFyV29LZE96TFFFZGpJTzdIY0ozblh0Z3BSVHZTNVhyVTg0NGZTbm1TZ1ViYW1SaDhFK0VhK0xFWFZQdmpVUXZkL0Jwcm9Vb2xwYWJwUnk3NUJzRGFzcGtDb0RnU1F1alk5cVdhTktSSE1DOVpoQm9DT29iK3RRSTh4c0ZOMjdlM1pjVmZPR3B6eXdFWDcxajhPTUNOV3N2ZmszWVNnU1ZuOE9KL0lTWW9uN1hiSjRLSG1tZ3poNEg3cDdlTE0zNHlEVktkRDFVeS9JQW9RVmYwNG1iWGdqL1lrZ3JWSjRhZUhTWGw2NjREU1lnPT1cIn0iLCJzdWJzY3JpYmVySWQiOiI1MjMxODg5MDgzIn0sImV4cCI6MTY3Nzc1NTQ0NiwiaWF0IjoxNjc3NzQ4MjQ2fQ.8o2TstlSRTJm4AyrxQZACJBcbMcyagDoVDvX7UwEROBeE_6pRm8hcvsul3TPtaEY6y4x5n-TBD1Pz6USxe3_bA"
        },
        body: JSON.stringify(bodyobj),
    };
    return fetch("https://jiotvapi.media.jio.com/playback/apis/v1/geturl?stream_type=Seek&channel_id=", fetchOpts)
        .then(resp => resp.text())
        .then(allResponses => {
            return allResponses;
        }).catch(err => {
            return err;
        });
}
