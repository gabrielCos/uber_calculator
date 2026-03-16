from imap_tools import MailBox, AND
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from datetime import date
import datetime
import os
import re

load_dotenv("/mnt/c/Users/chris/Desktop/Programação/projetos/UberCalculator/.env")

EMAIL = os.getenv("EMAIL_USER")
PASSWORD = os.getenv("EMAIL_PASSWORD")
IMAP_SERVER = os.getenv("IMAP_SERVER")
IMAP_PORT = int(os.getenv("IMAP_PORT"))

valor_regex = re.compile(r'R\$\s*\d+,\d+') #regex to find de value of the uber ride 

total = 0 #initial value

#passing the dates with variables including the day of start and end
initial_date = datetime.date(2026, 2, 25) - datetime.timedelta(days=1)
final_date = datetime.date(2026, 3, 29) + datetime.timedelta(days=1)

with MailBox(IMAP_SERVER).login(EMAIL, PASSWORD) as mb:
    for msg in mb.fetch(
                        #filters
                        AND(
                            from_="Recibos da Uber", 
                            date_gte = initial_date, 
                            date_lt = final_date,
                            ),
                            limit=20,
                            reverse=True
                        ):
        html = msg.html #getting the html of the email
        match = valor_regex.search(html) 
        
        if match:
            valor_corrida = float(
                match.group().replace("R$", "").replace(",", ".").strip()
            )
            data_formatada = msg.date.strftime("%d/%m/%Y")
            total += valor_corrida
            print(valor_corrida," - ", data_formatada)

print("Total: ", total)
        