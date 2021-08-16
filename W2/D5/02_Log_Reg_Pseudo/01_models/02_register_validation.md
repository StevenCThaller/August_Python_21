# Register Validation

```py
    # in User class
    @staticmethod
    def register_validation(data):
        is_valid = True

        # if our first_name field is empty
            # use flash to store some error message, like "First Name is a required field"
            # set is_valid to false
        # elif first_name field is less than 2 characters
            # use flash message to store some error message
            # set is_valid to false
        # else use regex or isalpha to check if first_name field is only letters
            # use flash message to store some error message
            # set is_valid to false

        # do the previous steps, but with last_name

        # if our email field is empty
            # use flash message to store some error message
            # set is_valid to false
        # elif use regex to check for valid email format (i.e. characters followed by @ followed by characters followed by . followed by 2-3 characters)
            # if not valid format, use flash message to store some error message
            # set is_valid to false
        # else query the db for a user with the email matching our email field from the form
            # if it exists, use flash to store a message about a duplicate email
            # set is_valid to false

        # if our password field is empty
            # use flash to store some error message
            # set is_valid to false
        # elif our password length is less than 8 characters
            # use flash to store some error message
            # set is_valid to false
        # elif our password does not match confirm_password
            # use flash to store some error message
            # set is_valid to false

        return is_valid
```