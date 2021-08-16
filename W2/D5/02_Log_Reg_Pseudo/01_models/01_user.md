# User Model

For login registration, our users are going to have a `first_name`, `last_name`, `email`, `password`, and our timestamps.

```py
class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        # Quiz time: Do we want our confirm_password in here?
        # NO
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
```

We're going to assume that by now you know how to take form data to create the user in the database,
so the next thing we'll look at is our validations

