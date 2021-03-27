<template>
<div>
    <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle" class="animated flipInX flashcard pt-3 mt-3 shadow">
        <div>
            <img v-if="imgFront!=''" :src="imgFront" width="285" height="355">
            <div class=' text-center d-flex align-self-end h3'>
                <span class="m-auto">{{front}}</span>
            </div>
        </div>
    </div>
    <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle" class="animated flipInX flashcard pt-3 mt-3 shadow">
        <div>
            <img v-if="imgFront!=''" :src="imgBack" width="285" height="355">
            <div class=' text-center d-flex align-self-end h3'>
                <span class="m-auto">{{ back }}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isToggle: false,
        }
    },
    props: {
        imgFront: {
            type: String,
            default: ''
        },
        imgBack: {
            type: String,
            default: ''
        },
        front: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: ''
        },
        textSizeFront: {
            type: String,
            default: '2em'
        },
        textSizeBack: {
            type: String,
            default: '2em'
        },
        colorTextFront: {
            type: String,
            default: 'black'
        },
        colorTextBack: {
            type: String,
            default: 'white'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: '#FFD1DC'
        },

    }
}
</script>

<style scoped>
.flashcard {
    text-align: center;
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}

.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}
</style>