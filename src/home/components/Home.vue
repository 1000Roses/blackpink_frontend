<template>
<div>
    <b-container class="mt-2">
        <b-row>
            <b-col cols=8>
                <Carousel/>
                <Chart/>
            </b-col>
            <b-col cols=4>
                <Song/>
            </b-col>
        </b-row>
    </b-container>
    <b-container fluid class='w-75'>
        <b-row>
            <b-col v-for="(idol,index) in idols" :key="idol">
                <Idolcard :front="idol.name" :imgFront="idol_images[index][idol.name]['front']" :back="idol.name" :imgBack='idol_images[index][idol.name]["back"]'>
                </Idolcard>
            </b-col>
        </b-row>

    </b-container>


</div>
</template>

<script>
import Carousel from './Carousel'
import Song from './Song'
import Chart from './Chart'
import Idolcard from './Idolcard'
export default {
    components: {
        Carousel,
        Song,
        Chart,
        Idolcard
    },
    data() {
        return {
            idols: "",
            idol_images: [
                { Jennie: { back: 'https://i.pinimg.com/originals/f1/ef/b1/f1efb13c774d9046bc580a479b7f0a4a.jpg', front: 'https://pbs.twimg.com/media/ErHll9EXYAAP1CK.jpg' } },
                { Lisa: { back: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2020/12/30/866476/Lisa-Blackpink-3.jpg', front: 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/3/12/5069759384762a76150d6o-16155638926491856837254.jpg' } },
                { Rose: { back: 'https://lh3.googleusercontent.com/CxPS2nH3GbEc_k5hYV5MRp1hQ2dH5FrmKrcXM2KzCNKLmNkaGfZNYv2pFo4Xi2o6RFcIW6H9eteFgH7GF2w5Qq0LK6Gm7olPXaJsSftGoQkzYCdCT_udHJFlnqj4YsX1Pk--s1qD', front: 'https://file.tinnhac.com/resize/600x-/2021/01/25/20210125140902-f874.jpg' } },
                { Jisoo: { back: 'https://media.phunutoday.vn/files/content/2020/08/19/jisoo24-1027.jpg', front: 'https://img.webtintuc.com/2020/08/jisoo-ros%C3%A9-blackpink-2.jpg' } }
            ],
        }
    },
    methods: {
        fetch_idols: function() {
            fetch("http://127.0.0.1:8000/blackpinkinfo/", {
                    method: "GET"
                })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    this.idols = data
                })
        }
    },
    created() {
        this.fetch_idols()
    }

}
</script>