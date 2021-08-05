# A Guy Walks Into a Bar and says Ouch

Before we even touch Flask, let's talk about the flow of things.

## HTTP Request Response Cycle

Using the internet feels like it's instantaneous, but it is not. The whole process revolves around this request and response cycle.

### Request

Requests are sent from the client side. Any time a user types a url in their browser and hits enter, clicks a link, or submits a form, they are sending an `HTTP Request` to some server.

### Server Receives Request

These requests are being sent SOMEWHERE, but we have yet to actually see that part. That's where `Flask` comes in. We need to build a server that will listen for `HTTP Requests`, and based on the destination of the request (the `url`), run some function before sending out an `HTTP Response`.

### Response

At the culmination of EVERY SINGLE function that we create will be some type of `HTTP Response`. For now, we'll be focusing on `rendering` HTML files as a response.

