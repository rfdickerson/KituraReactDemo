import Kitura
import Foundation
import SwiftyJSON

import HeliumLogger

HeliumLogger.use()

let envVars = ProcessInfo.processInfo.environment

let router = Router()




router.get("/app") {
    request, response, next in
    let fruits = ["apple", "orange", "banana", "plum"]
    response.send(json: JSON(fruits))
    next()
}

if envVars["ENV"] != "PRODUCTION" {
    router.all("/", middleware: StaticFileServer(path: "../../public"))
}

// Look for environment variables for PORT

let portString: String = envVars["PORT"] ?? envVars["CF_INSTANCE_PORT"] ??  envVars["VCAP_APP_PORT"] ?? "8090"
let port = Int(portString) ?? 8090

Kitura.addHTTPServer(onPort: port, with: router)
Kitura.run()

