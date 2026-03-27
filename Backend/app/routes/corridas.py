from fastapi import APIRouter, Query
from app.services.email_service import buscar_corridas

router = APIRouter()

@router.get("/corridas")
def get_corridas(
    data_inicio: str = Query(...),
    data_fim: str = Query(...),
    limite: int = 20
):
    return buscar_corridas(data_inicio, data_fim, limite)