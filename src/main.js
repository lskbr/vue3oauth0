import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import the Auth0 configuration
import authConfig from '../auth_config.json'

// Import the plugin here
import { setupAuth  } from "./auth";

const app = createApp(App)

app.use(router)

function callbackRedirect(appState) {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : '/'
    );
  }
  
  setupAuth(authConfig, callbackRedirect).then((auth) => {
    app.use(auth).mount('#app')
    console.log("Done")
  })

