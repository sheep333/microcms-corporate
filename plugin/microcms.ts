import { createClient } from 'microcms-js-sdk'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const client = createClient({
    serviceDomain: config.MICROCMS_SERVICE_DOMAIN,
    apiKey: config.MICROCMS_API_KEY,
  })

  return {
    provide: {
      microcms: client
    }
  }
})