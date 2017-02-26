import Kitura
import Foundation

import HeliumLogger

HeliumLogger.use()

let envVars = ProcessInfo.processInfo.environment

let router = Router()

router.all("/", middleware: StaticFileServer(path: "../../public"))

router.get("/app") {
    request, response, next in
    response.send("Hello, World! Robert Dickerson")
    response.send("Just a test for you.")

    next()
}

// Look for environment variables for PORT

let portString: String = envVars["PORT"] ?? envVars["CF_INSTANCE_PORT"] ??  envVars["VCAP_APP_PORT"] ?? "8090"
let port = Int(portString) ?? 8090

Kitura.addHTTPServer(onPort: port, with: router)
Kitura.run()

