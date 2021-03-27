<template>
<div>
    <h3 class='text-center'>#The Song</h3>
    <div v-for="song in songs" v-bind:key="song" class='border-bottom border-top'>
        <p class='mr-2 mt-2 mb-2'>{{song.name}}</p>
        <iframe :src="song.spotify_embedding" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            songs: [
                { name: "How You Like That", spotify_embedding: 'https://open.spotify.com/embed/track/4SFknyjLcyTLJFPKD2m96o' },
                { name: "Lovesick Girls", spotify_embedding: "https://open.spotify.com/embed/track/4Ws314Ylb27BVsvlZOy30C" },
                { name: "Pretty Savage", spotify_embedding: 'https://open.spotify.com/embed/track/1XnpzbOGptRwfJhZgLbmSr' },
                { name: "Kill This Love", spotify_embedding: 'https://open.spotify.com/embed/track/6hvczQ05jc1yGlp9zhb95V' },
                { name: "As If It's Your Last", spotify_embedding: 'https://open.spotify.com/embed/track/4ZxOuNHhpyOj4gv52MtQpT' },
            ]
        }
    }
}
</script>