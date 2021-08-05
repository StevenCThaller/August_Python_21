from flask import Flask, render_template
app = Flask(__name__) 

@app.route('/') 
def hello_world():
    return render_template('index.html')

@app.route('/coding')
def coding_is_fun():
    return "Coding is so fun!"

@app.route('/user/<string:user_name>/<int:user_age>')
def user_info(user_age, user_name):
    # return f"Hello {user_name}, you are {user_age} years old."
    return render_template('dynamic.html', name = user_name, age = user_age)

@app.route('/names/all')
def all_names():
    names = [
        "Michael",
        "Li Yen",
        "Joe",
        "Nathon",
        "Jonathan"
    ]

    my_name = "Cody"

    return render_template("names.html", student_names=names, requested_by=my_name)

if __name__ == "__main__":
    app.run(debug=True)