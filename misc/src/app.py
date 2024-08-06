from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    message = None
    numbers_received = None
    sum_result = None

    if request.method == "POST":
        try:
            number1 = int(request.form.get("number1"))
            number2 = int(request.form.get("number2"))
            if number1 > 0 and number2 > 0:
                numbers_received = f"Numbers received: {number1}, {number2}"
                sum_result = f"Sum: {number1 + number2}"
            else:
                message = "Please enter positive integers only."
        except ValueError:
            message = "Invalid input. Please enter integers only."

    return render_template(
        "index.html",
        numbers_received=numbers_received,
        sum_result=sum_result,
        message=message,
    )


if __name__ == "__main__":
    app.run(debug=False)
