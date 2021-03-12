<template>
  <div class="container">
    <b-card id="light">
      <h1>Register</h1>
      <div class="row">
        <b-label class="col-3">FirstName : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="FN"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">LastName : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="LN"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">UserName : </b-label>
        <b-input class="col-7 ml-md-5" type="text" v-model="UN"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">Password : </b-label>
        <b-input class="col-7 ml-md-5" type="password"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">Confirm Password : </b-label>
        <b-input class="col-7 ml-md-5" type="password" v-model="PW"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">E-mail : </b-label>
        <b-input class="col-7 ml-md-5" type="email" v-model="EM"></b-input>
      </div>
      <br/>
      <div class="row">
        <b-label class="col-3">Tel : </b-label>
        <b-input class="col-7 ml-md-5" type="tel" v-model="TL"></b-input>
      </div>
      <br/>
      <b-button variant="success" @click="addData()">Register</b-button>
    </b-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export const db = firebase.firestore();
export default{
  data(){
    return{
      data:[],
    };
  },
  methods:{
    addData(){
      const data = {
        First_Name: this.FN,
        Last_Name: this.LN,
        User_Name: this.UN,
        Password: this.PW,
        E_mail: this.EM,
        Tel: this.TL
      }
      db.collection('MyForm')
        .document()
        .doc('User')
        .set(data)
        .then(function(){
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function(error){
          console.error('Error wrting document: ', error)
        })
        const dataText = {
          First_Name: this.FN,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        }
        db.collection('Mytext')
          .document()
          .doc()
          .set(dataText)
          .then(function(){
            console.log('Document successfully written! -> MyText')
          })
          .catch(function(error){
          console.error('Error wrting document: ', error)
        })
    },
  },
};

</script>
<style scoped>
#dark{
  background-color: rgb(66, 66, 66);
}
</style>

