from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "type whatever the heck you want here"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/wizard/create', methods=["POST"])
def create_wizard():
    session['name'] = request.form['name']
    session['magic_school'] = request.form['magic_school']

    return redirect('/wizard/success')

@app.route('/wizard/success')
def success():
    if 'name' not in session:
        return redirect('/')

    return render_template('success.html')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)