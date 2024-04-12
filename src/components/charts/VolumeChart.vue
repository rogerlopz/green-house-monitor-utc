<script lang="ts">
import * as zeu from 'zeu'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VolumeChart',
  props: {
    id: String,
    width: Number,
    height: Number,
    options: Object,
    displayValue: String,
    value: String
  },
  data: () => ({
    chart: null
  }),
  mounted() {
    if (!this.chart) {
      this.init()
    }
  },
  watch: {
    displayValue(val) {
      if (this.chart) {
        this.chart.displayValue = val
      }
    },
    value(val) {
      if (this.chart) {
        this.chart.value = val
      }
    },
    options(val) {
      console.log("Changed")
      this.chart.options = val
    }
  },
  beforeUnmount() {
    this.destroy()
  },
  methods: {
    init() {
      let textMeter = new zeu.VolumeMeter(this.$el.id, this.options)
      textMeter.displayValue = this.displayValue
      textMeter.value = this.value
      this.chart = textMeter
    },
    destroy() {
      this.chart?.destroy()
      this.chart = null
    }
  }
})
</script>

<template>
  <canvas :id="id" :width="width" :height="height"></canvas>
</template>

<style scoped></style>
