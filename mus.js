document.addEventListener("DOMContentLoaded", function () {
    // Список треков для основного плеера
    const mainTracks = [
        "music/2hollis-Trauma.m4a",
        "music/Osamason-New Tune.m4a",
        "music/2hollis-Style.m4a",
        "music/Mercedes Benz.m4a",
        "music/Playboi Carti Pop Out.m4a",
        "music/Kai Angel-Jeniffer's Body.m4a",
        "music/Kai Angel-Quite Turn Up.m4a",
        "music/Kai Angel-101 прчина.m4a",
        "music/Osamason-Uno.m4a",
        "music/2hollis-Crush.m4a",
        "music/OPM BABY.mp3",
        "music/Macan-Asphalt 8.mp3",
        "music/2hollis-Forfeit.m4a",
        "music/Yale - Ken Car$on.m4a",
        "music/Ken Carson-Suicidal.mp3"
    ];


    const extraPlayers = {
        playc: "music/OPM BABY.mp3",
        playh: "music/2hollis-Trauma.m4a",
        playk: "music/Ken Carson-Succubs.mp3"
    };

    let currentTrack = 8;
    let activeAudio = null; 


    const mainAudio = new Audio(mainTracks[currentTrack]);
    mainAudio.volume = 0.5;

    function stopCurrentAndPlay(newAudio) {
        if (activeAudio && !activeAudio.paused) {
            activeAudio.pause();
        }
        activeAudio = newAudio;
        newAudio.play().catch(err => console.error("Ошибка воспроизведения:", err));
    }

    function playMainTrack(index) {
        currentTrack = index;
        mainAudio.src = mainTracks[currentTrack];
        mainAudio.load();
        stopCurrentAndPlay(mainAudio);
        document.getElementById("play").textContent = "⏸";
    }

    document.getElementById("play").addEventListener("click", function () {
        if (mainAudio.paused) {
            stopCurrentAndPlay(mainAudio);
            this.textContent = "⏸";
        } else {
            mainAudio.pause();
            this.textContent = "▶️";
        }
    });

    document.getElementById("next").addEventListener("click", function () {
        playMainTrack((currentTrack + 1) % mainTracks.length);
    });

    document.getElementById("prev").addEventListener("click", function () {
        playMainTrack((currentTrack - 1 + mainTracks.length) % mainTracks.length);
    });

    document.getElementById("volume").addEventListener("input", function () {
        const volume = this.value;
        if (mainAudio) mainAudio.volume = volume;
        Object.values(extraAudioObjects).forEach(a => a.volume = volume);
    });

    mainAudio.addEventListener("ended", function () {
        playMainTrack((currentTrack + 1) % mainTracks.length);
    });


    function createTrackList() {
        const trackList = document.getElementById("track-list");
        trackList.innerHTML = "";
        mainTracks.forEach((track, index) => {
            let li = document.createElement("li");
            li.textContent = track.split("/").pop().replace(/\.[^/.]+$/, "");
            li.style.cursor = "pointer";
            li.addEventListener("click", () => playMainTrack(index));
            trackList.appendChild(li);
        });
    }

    document.getElementById("list").addEventListener("click", function () {
        const trackList = document.getElementById("track-list");
        if (trackList.style.display === "none" || trackList.style.display === "") {
            createTrackList();
            trackList.style.display = "block";
        } else {
            trackList.style.display = "none";
        }
    });

    const extraAudioObjects = {};

    for (const [btnId, file] of Object.entries(extraPlayers)) {
        const btn = document.getElementById(btnId);
        const audio = new Audio(file);
        audio.volume = 1;
        audio.loop = true;
        extraAudioObjects[btnId] = audio;

        btn.addEventListener("click", function () {
            if (audio.paused) {
                stopCurrentAndPlay(audio);
                if (btnId === "playh") btn.textContent = "STOP";
            } else {
                audio.pause();
                if (btnId === "playh") btn.textContent = "PLAY";
            }
        });
    }
});
