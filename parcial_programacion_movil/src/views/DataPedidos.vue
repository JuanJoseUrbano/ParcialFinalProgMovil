<template>
    <ion-page>
        <ion-content ref="content" class="ion-padding">
                <ion-card color="light" v-for="categoria in categorias" :key="categoria.id">
                <ion-card-header>
                    <ion-card-title class="ion-text-center">{{ categoria.nombre }}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                    <p><strong>Descripcion:</strong> {{ categoria.descripcion }}</p>
                </ion-card-content>
                <ion-item color="light">
                    <ion-button id="actualizar_producto" value="Actualizar" color="tertiary"
                        @click="obtenerPorId(categoria.id)" class="large-button">
                        Actualizar
                    </ion-button>
                    <ion-button id="actualizar_producto" value="Actualizar" color="tertiary"
                        @click="eliminarCategoria(categoria.id)" class="large-button">
                        Eliminar
                    </ion-button>
                </ion-item>
            </ion-card>
            <ion-modal :is-open="modalIsOpen">
                        <h1 class="ion-text-center">Actualizar Categoria</h1>
                        <ion-item color="light">
                            <ion-input v-model="categoria.nombre" obligatorio="*" id="nombre" type="text" label="Nombre"
                                placeholder="Digite el nombre de la categoria" required />
                        </ion-item>
                        <ion-item color="light">
                            <ion-input v-model="categoria.descripcion" obligatorio="*" id="marca" type="text"
                                label="Marca" placeholder="Digite su descripcion" required />
                        </ion-item>
                        <br>
                        <ion-button id="guardar" value="Guardar" color="success"
                            @Click="actualizarCategoria()">Guardar</ion-button>
            </ion-modal>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonItem, IonCard, IonButton, IonInput,IonCardHeader,IonModal } from '@ionic/vue';
import axios from 'axios'
import { ref, onMounted } from 'vue';

let url = 'http://localhost:9000/parcial/api/categoria'
let categorias = {
    nombre: '',
    descripcion: ''
}
let modalIsOpen = ref(false)
const setOpen = (open: boolean) => (modalIsOpen.value = open)

onMounted(() => {
    obtenerCategorias();
});

const obtenerCategorias = () => {
    axios.get(url).then(
        (response) => {
            categorias.value = response.data;
        }
    ).catch(function (error) {
        console.error("Estado de la petición: ", error);
        alert('No se pudo realizar la acción');
    });
}

const obtenerPorId = (id) => {
    let urlById = url + id;
    axios.get(urlById).then(
        (response) => {
            let datos = response.data;
            categorias = datos
            modalIsOpen.value = true;
        }).catch((error) => {
            console.error("Error al obtener producto por ID:", error);
        });
};

const actualizarCategoria = () => {
    if (categorias.nombre.trim() === '') {
        alert('Ingrese un nombre')
    } else if (categorias.descripcion.trim() === '') {
        alert('Ingrese una descripcion')
    } else {
        axios({ method: 'PUT', url: url, data: categorias })
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

const eliminarCategoria = (id) => {
        axios({ method: 'DELETE', url: url, data: {id:id} })
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
</script>

<style></style>