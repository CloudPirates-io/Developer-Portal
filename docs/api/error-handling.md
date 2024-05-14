---
next: false
---

# Error Handling

Our API utilizes HTTP status codes extensively to communicate errors and outcomes effectively for your requests. Below is a list of the most common errors you may encounter when using our API.

## Error Codes Overview

| Code | Description                                     |
|-------------|-------------------------------------------------|
| 400         | Bad Request - The server cannot process the request due to a client error, such as malformed syntax or invalid parameters. |
| 401         | Unauthorized - The request requires authentication, but the client has not provided valid credentials. |
| 403         | Forbidden - The client does not have permission to access the requested resource. |
| 404         | The server could not find the requested resource. |
| 500         | Internal Server Error - The server encountered an unexpected condition preventing it from fulfilling the request. |
| 502         | Bad Gateway - The server received an invalid response from an upstream server while trying to fulfill the request. |
| 503         | Service Unavailable - The server is currently unable to handle the request due to temporary overloading or maintenance. |
| 504         | Gateway Timeout - The server did not receive a timely response from an upstream server or proxy. |

When you encounter an error, you got a detailed explanation of the error in the response body. The error object contains a `code` element which masks the specific error code.

## 400 Bad Request

You send an invalid request with missing or wrong payload. Please look at the response body to get the exact error details.

**Examples**

Invalid Request with missing property `workspaceName`:
```json
{
    "status": 400,
    "instancePath": "",
    "schemaPath": "#/required",
    "keyword": "required",
    "params": {
        "missingProperty": "workspaceName"
    },
    "message": "must have required property 'workspaceName'"
}
```

Invalid request with wrong enum property `status`:
```json
{
    "status": 400,
    "instancePath": "/status",
    "schemaPath": "schemas/_Shared/Observability/alert_status.json/enum",
    "keyword": "enum",
    "params": {
        "allowedValues": [
            "FIRING",
            "RESOLVED"
        ]
    },
    "message": "must be equal to one of the allowed values"
}
```

Invalid request with disallowed additional property `myAdditionalProperty`:
```json
{
    "status": 400,
    "instancePath": "",
    "schemaPath": "#/additionalProperties",
    "keyword": "additionalProperties",
    "params": {
        "additionalProperty": "myAdditionalProperty"
    },
    "message": "must NOT have additional properties"
}
```

## 401 Unauthorized

Unauthorized - The request requires user authentication or, if the request included authorization credentials, authorization 
has been refused for those credentials.

**Example**

```json
{
    "status": 401,
    "message": "Unauthorized"
}
```

## 403 Forbidden
Forbidden - The server understood the request, but is refusing to fulfill it. Re-Authentication will not change this.

**Example**

```json
{
    "status": 403,
    "message": "Forbidden"
}
```

## 404 Not found
The server could not find the requested resource. This typically occurs when the requested URL is invalid, or the resource does not exist on the server.

::: warning
Our event sourced architecture employs eventually consistent read models. As a result, changes made by a POST, PUT, PATCH, or DELETE request may take a moment until all read models are fully updated. This delay might cause a subsequent (GET) request, executed immediately after the mutating request, to encounter an error like 404 or 403.
:::

**Example**

```json
{
    "status": 404,
    "message": "Not found"
}
```

## 503 Service Unavailable
At this time, our backend service for this endpoint was temporarily unavailable.

::: warning
Our internal backend system utilizes asynchronous handlers to process requests. This means that even if you encounter an error, your request can still be executed asynchronously at a later point in time.
:::

**Example**

```json
{
    "status": 503,
    "message": "Service Unavailable"
}
```

## 504 Gateway Timeout
Our backend service was unable to handle your request.

::: warning
Our internal backend system utilizes asynchronous handlers to process requests. This means that even if you encounter an error, your request can still be executed asynchronously at a later point in time.
:::

**Example**

```json
{
    "status": 504,
    "message": "Gateway Timeout"
}
```
