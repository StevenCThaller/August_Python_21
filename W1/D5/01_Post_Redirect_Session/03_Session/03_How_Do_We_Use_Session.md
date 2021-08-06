# How Do We Use Session?

Behind the scenes, `session` encrypts the data that we want to store in `session`. Because this data will technically be living both on our server **AND** the user's browser (one of these is significantly more secure than the other), we want to make sure that the data is not easily readible. So, first we need to import `session` from `flask`

```py
from flask import Flask, render_template, request, redirect, session
```

Then, we need to create a `secret key`. This will be used in the encryption process, so in order to "hack" the data in session, a hacker would need to either know, or guess your `secret key`.

```py
app.secret_key = "type whatever the heck you want here"
```

But now how do we actually use it?

`session` in our code is another dictionary. So to store data into `session`, we would store the value into some `key` in that dictionary

Assuming we have the same form as we did before, in our `/wizard/create` `POST` route:
```py
@app.route('/wizard/create', methods=["POST"])
def create_wizard():
    session['name'] = request.form['name']
    session['magic_school'] = request.form['magic_school']

    return redirect('/wizard/success')

```

And now, our data from the form will persist through any redirects or renders (for the most part)

So if I want to display that data on our `/success` route, and that data is stored in a dictionary called `session`

```py
@app.route('/wizard/success')
def success():
    return render_template('success.html', name=session['name'], magic_school=session['magic_school'])
```

### NEAT SHORTCUT!!
Because `session` is built into `flask`, `Jinja` actually has access to `session` when it's doing its thing with our `html` files. So I can streamline this a bit:
```py
@app.route('/wizard/success')
def success():
    return render_template('success.html')
```

And now, in our `success.html`:

```html
<h1>Success!</h1>
<p>Wizard Name: {{ session['name'] }}</p>
<p>School of Magic: {{ session['magic_school'] }}</p>
```