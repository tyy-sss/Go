<template>
  <div id="app">
    <form class="bs-example bs-example-form" role="form">
        <div class="input-group">
            <span class="input-group-addon">@</span>
            <input type="text" class="form-control" placeholder="twitterhandle">
        </div>
        <br>
        <div class="input-group">
            <input type="text" class="form-control">
            <span class="input-group-addon">.00</span>
        </div>
        <br>
        <div class="input-group">
            <span class="input-group-addon">$</span>
            <input type="text" class="form-control">
            <span class="input-group-addon">.00</span>
        </div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
  export default {
    data(){
      return {
        form :[{
            id : null,
            username : null
        }] 
      }
    },
    setup: {
      
    },
    created:function() {
        this.$http.get("/manager/login").then((response) =>{
          console.log(response.data)
          this.form = response.data
        })
    }
  }
  </script>
