<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://i.pinimg.com/originals/47/2b/03/472b037a3b4690fcb7e87c0a9deee267.jpg"
        height='480'
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://bloganchoi.com/wp-content/uploads/2020/01/blackpink-coachella.jpg"
        height='480'
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://media-cdn.laodong.vn/Storage/NewsPortal/2020/3/3/788224/ANH-2.jpg"
        height='480'
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://afamilycdn.com/2019/12/14/5-1576293849001973028461.jpg"
        height='480'
      ></b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
// image props : 1200x800
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
