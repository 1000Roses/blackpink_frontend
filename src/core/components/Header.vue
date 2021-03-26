<template>
    
    <div>
        <b-navbar type="dark" variant="dark" class="d-flex justify-content-around">
            <div class='w-50 d-flex flex-row'>
                
                <b-navbar-brand href="/" class='ml-4 pl-4'>BLACK PINK</b-navbar-brand>
                <b-navbar-nav>
                    <b-nav-item >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reprehenderit.</b-nav-item>
                </b-navbar-nav>
                
                
            </div>
            
            
            <b-nav-form class ="w-25">
                <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-navbar-nav>
                <b-nav-item-dropdown text="Account">
                    <b-dropdown-item href="#">Account</b-dropdown-item>
                    <b-dropdown-item href="#">Settings</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        
        </b-navbar>
    </div>
</template>

<style>
    #__BVID__8{
        width: 370px;
    }
</style>