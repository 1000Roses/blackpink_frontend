<template>
    <vue-card-stack :cards="cards" :maxVisibleCards='3' :card-width="1050" :card-height='282' >
        <template v-slot:card="{ card }">
            <div
                style="width: 100%; height: 100%;"
                :style="{ background: card.background }"
    
                >
                <b-row class="pt-2 pb-0" :style="{ background: card.background }">
                    <b-col cols=6 :style="{ background: card.background }">
                        <iframe width="500" height="282" :src="card.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </b-col>
                    <b-col cols=6 :style="{ background: card.background }">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, voluptates repudiandae. Tenetur porro, accusamus similique minima impedit omnis provident earum odio praesentium enim quis explicabo itaque eius debitis et nam, harum eligendi reiciendis, odit laborum ab optio natus culpa. Reprehenderit saepe facilis rem ducimus corrupti commodi aspernatur modi quod voluptas.
                    </b-col>
                </b-row>
            </div>
        </template>

    </vue-card-stack>
</template>

<script>
import VueCardStack from "vue-card-stack";
export default {
    components : {
        VueCardStack
    },
    data() {
        return {
            cards: [
                { background: "#FFD1DC", src: "https://www.youtube.com/embed/CKZvWhCqx1s" }, //on the ground
                { background: "#090909", src:"https://www.youtube.com/embed/2S24-y0Ij3Y"  }, // kill this love
                { background: "#FFD1DC", src: 'https://www.youtube.com/embed/ioNng23DkIM' }, // how u like that
            ],
            
        };
    },
    
}
</script>