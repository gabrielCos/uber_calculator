from pydantic import BaseModel
from typing import List

class Ride(BaseModel):
    valor: float
    data: str

class RidesResponse(BaseModel):
    total: float
    quantidade: int
    corridas: List[Ride]