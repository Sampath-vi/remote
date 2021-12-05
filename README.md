# Remote app

# Installation 

1. ```git clone git@github.com:Sampath-vi/remote.git```
2. ```cd remote; npm install; npm start; ``` - The app should start on port 8081.
3. Expose this port via [ngrok](https://ngrok.com/) or any other service and copy the URL. This URL will be necessary for the host app to acccess these resources.


# Directory 

- This app consists of a `Counter` and `Health` component which will both be reused in the `host app`.
- The `Counter` component just increments the state locally. 
- The `Health` component uses mobx store to fetch the config-backend health and display the result.


# Webpack 

- The resources are being exposed via webpack in a file called `remoteEntry.js`. Once the server is up, navigate to `http://localhost:8081/remoteEntry.js`.
- Components are being exposed and configured in `webpack.config.js` - [webpack.config.js](https://github.com/Sampath-vi/remote/blob/master/webpack.config.js#L43) 
- More on moduleFederation - [module-federation](https://webpack.js.org/concepts/module-federation/)
