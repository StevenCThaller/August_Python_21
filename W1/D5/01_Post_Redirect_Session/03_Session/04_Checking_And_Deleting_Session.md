# Checking and Deleting Sesssion

## Checking Session

Python makes this really easy because of how simple it is to work with dictionaries. Let's look back at how Python is easy to use and English readable.

If I want to know if a word exists in a dictionary (like, in real life, not computer programming dictionary), the question I would ask myself is "Is {{word}} in the dictionary?"

In Python, we're not that far from that.

```py
if 'name' not in session:
    return redirect('/')
```

This will enforce the need to submit the form prior to being able to see this page

## Deleting Session

In `flask`, since `session` is just a dictionary, we can delete pieces of `session` the same way we would delete a `key` from a dictionary

```py
@app.route('/logout')
def logout():
    del session['name']
    # OR, remember we can use .pop
    session.pop('magic_school')
```

But, what if we just want to clear EVERYTHING from session?

```py
@app.route('/logout')
def logout():
    session.clear()
```