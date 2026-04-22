from imap_tools import MailBox, AND
import re
from datetime import datetime
from app.core.config import EMAIL, PASSWORD, IMAP_SERVER, IMAP_PORT

valor_regex = re.compile(r'R\$\s*[\d.,]+')

def search_rides(start_date: str, end_date: str, limit: int = 20):
    total = 0
    rides = []

    start_date = datetime.strptime(start_date, "%Y-%m-%d").date()
    end_date = datetime.strptime(end_date, "%Y-%m-%d").date()

    try:
        with MailBox(IMAP_SERVER, IMAP_PORT).login(EMAIL, PASSWORD) as mb:
            print("SERVER:", IMAP_SERVER)
            print("PORT:", IMAP_PORT)
            print("EMAIL:", EMAIL)
            for msg in mb.fetch(
                AND(
                    from_="noreply@uber.com",
                    date_gte = start_date,
                    date_lt = end_date
                ),
                limit = limit,
                reverse = True
            ):
                match = valor_regex.search(msg.html or "")

                if match:
                    valor_str = match.group().replace("R$", "").strip()
                    valor_str = valor_str.replace(".", "").replace(",", ".")
                    valor = float(valor_str)

                    total += valor

                    rides.append({
                        "value": valor,
                        "date": msg.date.strftime("%Y-%m-%d")
                    })

        return {
            "total": total,
            "count": len(rides),
            "rides": rides
        }

    except Exception as e:
        return {"erro": str(e)}