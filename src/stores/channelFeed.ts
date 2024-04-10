import { ref } from 'vue'
import { defineStore } from 'pinia'
import { state } from 'vue-tsc/out/shared'

export interface Channel {
  created_at: string
  field1: string
  field2: string
  field3: string
  field4: string
  field5: string
  id: number
  last_entry_id: number
  latitude: string
  longitude: string
  name: String
  updated_at: string
}

export const useChannelFeedsStore = defineStore('ChannelFeeds', {
  state: () => ({
    isLoading: true,
    isError: false,
    channel: null,
    feeds: null,
    sensors: [],
    field1Feed: [],
    field2Feed: [],
    field3Feed: [],
    field4Feed: [],
    field5Feed: []
  }),
  actions: {
    async getChannelFeeds() {
      try {
        const response = await fetch('https://api.thingspeak.com/channels/636984/feeds.json')
        const payload = await response.json()

        if (response.status === 200) {
          this.channel = payload.channel
          this.feeds = payload.feeds

          for (let i = 0; i < payload.feeds.length; i++) {
            const feed = payload.feeds[i]
            if (feed.field1) {
              this.field1Feed.push(feed?.field1)
            }

            if (feed.field2) {
              this.field2Feed.push(feed?.field2)
            }

            if (feed.field3) {
              this.field3Feed.push(feed?.field3)
            }

            if (feed.field4) {
              this.field4Feed.push(feed?.field4)
            }
            if (feed.field5) {
              this.field5Feed.push(feed?.field5)
            }
          }

          this.isError = false
        } else {
          this.isError = true
        }

        this.isLoading = false
      } catch (error) {
        this.isError = true
      }
    }
  }
})
