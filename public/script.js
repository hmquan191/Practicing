const audioPlayer = document.getElementById('audio-player');
const trackTitle = document.querySelector('.track-title');
const trackArtist = document.querySelector('.track-artist');

const tracks = [
    { title: "Flights, Not Feelings", artist: "aespa", url: "/Practicing/music/aespa-flights_not_feelings.mp3"},
    { title: "Cà Phê", artist: "Min", url: "/Practicing/music/min-caphe.mp3"},

    { title: "Just Another Girl", artist: "aespa", url: "/Practicing/music/aespa-just_another_girl.mp3"},
    { title: "Lucid Dream", artist: "aespa", url: "/Practicing/music/lucidddream.mp3"},
    { title: "Cookies", artist: "New Jeans", url: "/Practicing/music/newjeans-cookies.mp3"}
]

let currentTrackIndex = 0;

function loadTrack(index){
    const track = tracks[index];
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    audioPlayer.src = track.url;
}

audioPlayer.addEventListener('ended', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
})

loadTrack(currentTrackIndex);