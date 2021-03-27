from flask import Flask, render_template, request, redirect
from peewee import *
from time import time

db = SqliteDatabase('tasks.db')

class task(Model):
	text = TextField()
	date = TimestampField()

	class Meta:

		database = db
		db_table = 'tasks'

task.create_table()

app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        passtask_content = request.form['content']
        print(passtask_content)
        new = task.create(text=passtask_content, date=time())
        new.save()
        tasks = task.select()
        return render_template('index.html', tasks=tasks)
    else:
        tasks = task.select()
        return render_template('index.html', tasks=tasks)

@app.route('/delete/<int:id>')
def delete(id):
    res = task.delete().where(task.id==id).execute()

    print(res)

    if res > 0:
        return redirect('/')
    else:
        return 'Errore! Non sono riuscito a eliminare la riga.'

if __name__ == '__main__':
    app.run(debug=True)
