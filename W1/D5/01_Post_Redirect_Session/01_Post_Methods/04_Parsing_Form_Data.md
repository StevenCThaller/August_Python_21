# How do we Grab the data then?

Let's say our form looks like this:

```html
<form action="/wizard/create" method="post">
    <div>
        <label for="name">Name: </label>
        <input type="text" name="name" id="name">
    </div>
    <div>
        <label for="magic_school">School of Magic: </label>
        <input type="text" name="magic_school" id="magic_school">
    </div>
    <input type="submit" value="Create Wizard">
</form>
```

As we just mentioned, the form data is coming through in a dictionary that we access as `request.form`. Each user input is stored in that dictionary as the value of the key. The key is what the `name` attribute is in the `html`.



```py
@app.route('/wizard/create', methods=["POST"])
def create_wizard():
    print(request.form['name'])
    print(request.form['magic_school'])
```