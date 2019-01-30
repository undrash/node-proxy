const express   = require( "express" );
const proxy     = require( "http-proxy-middleware" );
const app       = express();

/** Specify ports to be exposed and targeted within your local network */
const targetPORT        = 1100;
const exposePORT        = 8880;

/** Proxy will forward you responses for requests made to the target port */
app.use( '*', proxy( { target: `http://localhost:${ targetPORT }`, changeOrigin: true } ) );

/** Expose a port to connect to */
app.listen( exposePORT );

/**
 * INFO
 * How to find your network IP:
 * - Start
 * - Type: "Network proxy settings"
 * - Click on "Status" tab
 * - Click on "View your network properties"
 * - Identify your network by "Name" and "Description" (if you're using a wireless adapter, name should be WiFi)
 * - Identify your IPv4 address (e.g. 192.168.0.102)
 * - Connect your preferred device to the same network or wireless connection
 * - Concatenate the IPv4 address your found with the port you exposed and access if from your browser (e.g. http://192.168.0.102:8880)
 * - Profit
 * */
