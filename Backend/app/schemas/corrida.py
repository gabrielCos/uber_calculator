from pydantic import BaseModel
from typing import List

class Corrida(BaseModel):
    valor: float
    data: str

class CorridasResponse(BaseModel):
    total: float
    quantidade: int
    corridas: List[Corrida]