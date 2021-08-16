# Login Validation

```py
# in our User class
@staticmethod
def login_validation(data):
    is_valid = True

    # query the database for a user with the given email address

    # if a user with the given email does not exist
        # use flash to say "invalid email/password"
        # return false

    # elif we use becrypt to verify the form password against the database password and it is not a match
        # use flash to say "invalid email/password"
        # return false

    return # user that we got back from the query
```