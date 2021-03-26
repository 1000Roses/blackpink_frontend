<template>
    <div>
        <b-container class="mt-2">
            <b-row>
                <b-col cols=8>
                    <Carousel/>
                    <Chart/>
                </b-col>
                <b-col cols=4 >
                    <Song/>
                </b-col>
            </b-row>
            
        </b-container>
        
    </div>
</template>

<script>
import Carousel from './Carousel'
import Song from './Song'
import Chart from './Chart'
export default {
   components :{
       Carousel,
       Song,
       Chart
   },
   data(){
       return {
               
           
       }
   }
}
</script>