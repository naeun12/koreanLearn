<template>

</template>
<script>
const SOUND_URLS = {
    correct: '/sounds/gamevisualsound/chrisiex1-correct-156911.mp3',
    wrong: '/sounds/gamevisualsound/wrong.mp3',
    finalscores: '/sounds/gamevisualsound/freesound_community-success-fanfare-trumpets-6185.mp3'
};
    export default {
    name: 'GameSounds',
    methods: { 
            playSound(type) {
            const url = SOUND_URLS[type];

            if (!url) {
                console.warn(`Sound type "${type}" not found`);
                return;
            }

            const audio = new Audio(url);
            audio.play().catch(err => {
                console.error("Audio play failed:", err);
            });
        }
        }
}
</script>