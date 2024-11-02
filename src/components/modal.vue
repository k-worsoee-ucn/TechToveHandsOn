<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>
      <!-- Indholdet til modal vil blive indsat her via slot -->
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean, // Modtager prop til at bestemme om modal skal vises
})

const emit = defineEmits(["close"])

// Funktion til at lukke modal
const close = () => {
  emit("close")
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    .modal-content {
      position: relative;
      background: white;
      padding: 20px;
      border-radius: 5px;
      z-index: 1001;

      button {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 8px 12px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: #0056b3;
        }
      }
    }
  }
}
</style>
