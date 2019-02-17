from gmplot import gmplot as gp
import csv
import random


map = gp.GoogleMapPlotter(40.1105875,-88.2072697,13,apikey="AIzaSyCLV6iOyD6d60RXPgpzMf4baAy8ZqjCdYE")

path = "trips_data.csv"

data = []


with open(path) as file:
    reader = csv.reader(file)
    headers = next(reader)

    for row in reader:
        if len(row[5]) != 0:
            lat = (float(row[5]),float(row[9]))
            lng = (float(row[6]),float(row[10]))
            data.append((lat,lng))



for pair in data:
    r = lambda: random.randint(0, 255)
    color = '#%02X%02X%02X' % (r(), r(), r())
    map.plot(pair[0],pair[1],color, edge_width = 3)

map.draw("my_map3.html")
