from imap_tools import MailBox, AND
import re
from datetime import datetime
from app.core.config import EMAIL, PASSWORD, IMAP_SERVER, IMAP_PORT

valor_regex = re.compile(r'R\$\s*[\d.,]+')

def buscar_corridas(data_inicio: str, data_fim: str, limite: int = 20):
    total = 0
    corridas = []

    initial_date = datetime.strptime(data_inicio, "%Y-%m-%d").date()
    final_date = datetime.strptime(data_fim, "%Y-%m-%d").date()

    try:
        with MailBox(IMAP_SERVER, IMAP_PORT).login(EMAIL, PASSWORD) as mb:
            for msg in mb.fetch(
                AND(
                    from_="noreply@uber.com",
                    date_gte=initial_date,
                    date_lt=final_date
                ),
                limit=limite,
                reverse=True
            ):
                match = valor_regex.search(msg.html or "")

                if match:
                    valor_str = match.group().replace("R$", "").strip()
                    valor_str = valor_str.replace(".", "").replace(",", ".")
                    valor = float(valor_str)

                    total += valor

                    corridas.append({
                        "valor": valor,
                        "data": msg.date.strftime("%d/%m/%Y")
                    })

        return {
            "total": total,
            "quantidade": len(corridas),
            "corridas": corridas
        }

    except Exception as e:
        return {"erro": str(e)}