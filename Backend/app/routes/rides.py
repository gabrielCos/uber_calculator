from fastapi import APIRouter, Query
from app.services.email_service import search_rides

router = APIRouter()

@router.get("/rides")
def get_rides(
    start_date: str = Query(...),
    end_date: str = Query(...),
    limit: int = 20
):
    return search_rides(start_date, end_date, limit)