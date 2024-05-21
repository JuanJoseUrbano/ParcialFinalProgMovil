<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <h1 class="ion-text-center" color="light">Agregar Categoria</h1>
                <ion-item color="light">
                    <ion-input v-model="categoria.nombre" obligatorio="*" id="nombre" type="text" label="Nombre"
                        placeholder="Digite el nombre de la categoria" required />
                </ion-item>
                <ion-item color="light">
                    <ion-input v-model="categoria.descripcion" obligatorio="*" id="marca" type="text" label="Marca"
                        placeholder="Digite su descripcion" required />
                </ion-item>
                <br>
                <ion-button id="guardar" value="Guardar" color="success"
                    @Click="guardarCategoria()">Guardar</ion-button>
            </ion-card>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonItem, IonCard, IonButton, IonInput } from '@ionic/vue';
import axios from 'axios'

let url = 'http://localhost:9000/parcial/api/categoria'
let categoria = {
    nombre: '',
    descripcion: ''
}

const guardarCategoria = () => {
    if (categoria.nombre.trim() === '') {
        alert('Ingrese un nombre')
    } else if (categoria.descripcion.trim() === '') {
        alert('Ingrese una descripcion')
    } else {
        axios({ method: 'POST', url: url, data: categoria })
            .then(function (response) {
                let estado = response.status;
                if (estado === 200) {
                    alert('Éxito! ' + ' La acción se realizó correctamente.');
                }
            })
            .catch(function (error) {
                console.error("Estado de la petición: ", error);
                alert('Error' + ' No se pudo realizar la acción');
            });
    }

}
</script>