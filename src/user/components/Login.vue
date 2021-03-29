<template>
    <b-container class="w-25 d-flex" style='height:100vh'>
        <b-form @submit.prevent="submit" class="align-self-center w-100 border shadow px-1 py-4">
            
            <p class='text-center h3'>Login page</p>
            
            
            <b-row class='mb-2'>
                <b-col cols=2 class="align-self-center">Email</b-col>
                <b-col cols=10>
                    <b-form-input
                        type="email"
                        placeholder="Your email"
                        required
                        v-model="form.email"
                    >
                    </b-form-input>
                </b-col>
                
            </b-row>
            <b-row class='mb-2'>
                <b-col cols=2 class="align-self-center">Password</b-col>
                <b-col cols=10>
                    <b-form-input
                        type="password"
                        placeholder="Your password"
                        required
                        v-model="form.password"
                    >     
                    </b-form-input>        
                </b-col>
            </b-row>
            <b-row class='mb-2'>
                <b-button type='submit' class='m-auto'>Sent</b-button>
            </b-row>
            

            <a href="" class='d-flex justify-content-center text-dark'>
                Forget your password or username
            </a>
            <a href="" class='d-flex justify-content-center text-dark'>
                If dont have account, sign up here ..
            </a>

        </b-form>
    </b-container>
</template>

<script>
export default {
    data(){
        return {
            form : {
                email : "",
                password : ""
            }
        }
    }
}
</script>