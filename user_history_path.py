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


# another library
# import googlemaps
# from datetime import datetime

# gmaps = googlemaps.Client(key='AIzaSyCLV6iOyD6d60RXPgpzMf4baAy8ZqjCdYE')

# # Geocoding and address
# geocode_result = gmaps.geocode('1600 Amphitheatre Parkway, Mountain View, CA')

# # Look up an address with reverse geocoding
# reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

# # Request directions via public transit
# now = datetime.now()
# directions_result = gmaps.directions("Sydney Town Hall",
#                                      "Parramatta, NSW",
#                                      mode="transit",
#                                      departure_time=now)

# print(geocode_result)
