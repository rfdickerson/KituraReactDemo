import Kitura
import Foundation

import HeliumLogger

HeliumLogger.use()

let router = Router()

router.get("/") {
    request, response, next in
    response.send("Hello, World! Robert Dickerson")
    response.send("Just a test for you")

    next()
}

// Look for environment variables for PORT
let envVars = ProcessInfo.processInfo.environment
let portString: String = envVars["PORT"] ?? envVars["CF_INSTANCE_PORT"] ??  envVars["VCAP_APP_PORT"] ?? "8090"
let port = Int(portString) ?? 8090

Kitura.addHTTPServer(onPort: port, with: router)
Kitura.run()

