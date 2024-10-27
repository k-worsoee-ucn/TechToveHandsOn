<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <button class="close-button" @click="close">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
})
const emit = defineEmits(["close"])
const close = () => {
  emit("close")
}
</script>

<style scoped>
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
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
}

button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
