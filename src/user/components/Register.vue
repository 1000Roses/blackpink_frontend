<template>
    <b-container class='w-50'>
        <h3 class='text-center mb-4'> Register user</h3>
        <b-form @submit.prevent="onSubmit" >
            <b-row class="mb-4">
                <b-col cols=3>Email của bạn</b-col>
                <b-col cols=9>
                    <b-form-input
                        type ='email'
                        placeholder="Nhập email của bạn"
                        v-model="form.email"
                        required
                    ></b-form-input>
                </b-col>              
            </b-row>

            <b-row class="mb-4">
                <b-col cols=3>Tên người dùng</b-col>
                <b-col cols=9>
                    <b-form-input
                        type ='text'
                        placeholder="Nhập tên ingame của bạn"
                        v-model="form.name"
                        required
                    ></b-form-input>
                    <div v-if="$v.form.name.required">
                        <code class="ml-2">Mật khẩu có ít nhất 8 kí tự</code>
                    </div>
                </b-col>
                
            </b-row>

            <b-row class="mb-4">
                <b-col cols=3>Mật khẩu</b-col>
                <b-col cols=9>
                    <b-form-input
                        type ='password'
                        placeholder="Nhập mật khẩu của bạn"
                        v-model="form.password"
                        required
                    ></b-form-input>
                    <div v-if="$v.form.password.required">
                        <code class="ml-2" v-if="!$v.form.password.minLength">Mật khẩu có ít nhất 8 kí tự</code>
                    </div>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col cols=3>Nhập lại mật khẩu</b-col>
                <b-col cols=9>
                    <b-form-input
                        type ='password'
                        placeholder="Nhập lại mật khẩu của bạn"
                        v-model="form.repassword"
                        required
                    ></b-form-input>         
                    <div v-if="$v.form.repassword.required">
                        <div v-if="!$v.form.password.required">
                            <code>Nhập password trước đã</code>
                        </div>
                        <div v-else>
                            <code class="ml-2" v-if="!$v.form.repassword.sameAsPassword">Vui lòng nhập lại đúng password</code>
                        </div>
                    </div>
                </b-col>
            </b-row>

            <b-row>
                <b-button type="submit" variant="success" class="m-auto">Đăng kí</b-button>
            </b-row>
        </b-form>
    </b-container>
</template>

<script>
import { required, minLength, sameAs} from 'vuelidate/lib/validators'
export default {
    data(){
        return {
            form : {
                email : "",
                name : "",
                password : "",
                repassword : ""
            },
            db : {
                nameingame : ["vantien",'ironman','batman']
            }
        }
    },
    methods : {
        onSubmit : function(){
            if (this.$v.form.email.required && this.$v.form.password.required && this.$v.form.password.minLength && this.$v.form.repassword.sameAsPassword){
                console.log("abc")
            }
                
        }
    },
    validations: {
        form : {
            email : {
                required,
            },
            name : {
                required,
            },
            password : {
                required,
                minLength : minLength(8)
            },
            repassword : {
                required,
                sameAsPassword: sameAs('password')
            }
        }
    }
}
</script>