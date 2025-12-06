from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

# 1️⃣ Create a BaseModel class
class UserRequest(BaseModel):
    name: str
    age: int

# 2️⃣ Create POST endpoint
@app.post("/user")
def create_user(data: UserRequest):
    return {
        "message": "User data received",
        "name": data.name,
        "age": data.age,
        "age_in_5_years": data.age + 5
    }

# 3️⃣ Health endpoint (GET)
@app.get("/health")
def health_check():
    return {"status": "ok", "service": "python-health"}
