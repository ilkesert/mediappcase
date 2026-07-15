import subprocess
import sys

try:
    import pypdf
except ImportError:
    print("Installing pypdf...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

reader = pypdf.PdfReader("article.pdf")
print(f"Total pages: {len(reader.pages)}")

# Extract text from all pages
full_text = ""
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    full_text += f"\n--- Page {i+1} ---\n" + text

with open("article_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print("Text extracted and saved to article_text.txt")
print("First 1000 characters:")
print(full_text[:1000])
