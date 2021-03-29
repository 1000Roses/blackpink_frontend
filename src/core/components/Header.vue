<template>
<div>
    <b-container fluid class='px-0'>
        <b-navbar type="dark" variant="dark" class="d-flex justify-content-around">

            <div class=' d-flex flex-row justify-content-start'>
                <b-navbar-brand href="/" class='ml-4 pl-4'>BLACK PINK</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.</b-nav-item>
                </b-navbar-nav>
            </div>

            <b-nav-form>
                <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-button variant="dark" class='border-success'>
                <router-link to='login' class= 'text-success'> Login </router-link>

                </b-button>

            <b-navbar-nav>
                <b-nav-item-dropdown text="Account">
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-navbar>
    </b-container>

</div>
</template>

<style>
#__BVID__8 {
    width: 370px;
}
</style>