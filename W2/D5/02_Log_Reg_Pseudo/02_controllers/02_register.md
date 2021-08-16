# Register Route

```py
@app.route('/register', methods=['POST'])
def register():
    # if not (pass request.form into our registration validator that we built into the User class)
        # redirect back to the form
    
    # hash the password from the form and store it in a variable

    # create a new dictionary with the form data, replacing password with our hashed password, and no need to create the confirm key value pair

    # use that dictionary to pass into the User create method (i.e. create an entry in the database with that data)

    # the previous step (running the query) returns the id of the user it created, so let's store it into session 

    # redirect into the next place
```