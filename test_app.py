import pytest
from app import app


@pytest.mark.parametrize("number1, number2", [("1", "2"), ("3", "4"), ("5", "6")])
def test_valid_positive_integers(number1, number2):
    with app.test_client() as client:
        response = client.post("/", data={"number1": number1, "number2": number2})
        assert "Numbers received" in response.get_data(as_text=True)


@pytest.mark.parametrize("number1, number2", [("abc", "123"), ("-1", "2"), ("", "3")])
def test_invalid_input(number1, number2):
    with app.test_client() as client:
        response = client.post("/", data={"number1": number1, "number2": number2})
        assert "Invalid input" in response.get_data(
            as_text=True
        ) or "Please enter positive integers only" in response.get_data(as_text=True)
