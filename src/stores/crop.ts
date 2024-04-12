import { defineStore } from 'pinia'

export const useCropStore = defineStore('Crops', {
  state: () => ({
    crops: [
      { name: 'Tomate', id: 'tomate' },
      { name: 'Lechuga', id: 'lechuga' },
      { name: 'Maiz', id: 'maiz' }
    ],
    selectedCrop: { name: 'Tomate', id: 'tomate' },
    luminosity: [
      {
        id: 'tomate',
        name: 'Tomate',
        min: 10000,
        max: 40000,
        description:
          'A tomato is the edible, usually red, berry of the nightshade Solanum lycopersicum, a sprawling vine that is widely cultivated for its fruit. Tomatoes are technically fruits, but they are typically used in savory dishes, so they are considered to be vegetables in a culinary sense .'
      },
      {
        name: 'Lechuga',
        id: 'lechuga',
        min: 12000,
        max: 30000,
        description:
          "Lettuce is a leafy green vegetable, though some varieties can be red or purple. It's a common salad ingredient with a crisp texture and mild flavor. There are many types of lettuce, with leaves ranging from curly and loose to tightly packed in a head."
      },
      {
        id: 'maiz',
        name: 'Maiz',
        min: 300000,
        max: 600000,
        description:
          "Corn, also known as maize, is a tall, annual grass (Zea mays) cultivated worldwide for its large kernels.  It's one of the most important grains globally, used for both human and animal consumption."
      }
    ]
  }),
  getters: {
    cropLuminosity: (state) =>
      state.luminosity.filter((lumen) => lumen.id === state.selectedCrop.id)[0]
  }
})
