import urllib.request
import os
import time

url = "https://dergipark.org.tr/en/download/article-file/1287115"
pdf_path = "article.pdf"

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
req = urllib.request.Request(url, headers=headers)

for attempt in range(5):
    try:
        print(f"Downloading attempt {attempt + 1}...")
        with urllib.request.urlopen(req) as response:
            with open(pdf_path, 'wb') as out_file:
                while True:
                    chunk = response.read(1024 * 64)
                    if not chunk:
                        break
                    out_file.write(chunk)
        print(f"Downloaded successfully. Size: {os.path.getsize(pdf_path)} bytes")
        break
    except Exception as e:
        print(f"Attempt {attempt + 1} failed: {e}")
        time.sleep(2)
