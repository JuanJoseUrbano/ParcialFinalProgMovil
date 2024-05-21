<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Parcial Final Programacion Movil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="card-container">
        <ion-card color="dark" @click="$router.push('/datos-carros')">
        <h1 >Carros</h1>
      </ion-card>
      <ion-card color="dark" @click="$router.push('/datos-categorias')">
        <h1>Categorias</h1>
      </ion-card>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/vue';
</script>

<style scoped>
h1{
  color: ghostwhite;
}
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
}

.card-container ion-card {
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.card-container h1 {
    margin: 0;
}
</style>
