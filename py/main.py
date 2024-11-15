import requests
 
url = 'http://127.0.0.1:5500/html/blank.html'
response = requests.get(url)
 
with open('.png', 'wb') as file:
    file.write(response.content)