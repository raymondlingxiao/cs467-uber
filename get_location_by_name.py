# another library
import pandas as pd
import googlemaps
from datetime import datetime

csv = pd.read_csv("trips_data.csv")


gmaps = googlemaps.Client(key='AIzaSyCLV6iOyD6d60RXPgpzMf4baAy8ZqjCdYE')

# Geocoding and address

# Look up an address with reverse geocoding
reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))

# Request directions via public transit
now = datetime.now()
directions_result = gmaps.directions("Sydney Town Hall",
                                     "Parramatta, NSW",
                                     mode="transit",
                                     departure_time=now)

locations = ["Champaign", "Walt Disney World Resort, Orlando", "Miami", "60 Mahidol Rd, Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200"]
rst = {}

for location in locations:
    geocode_result = gmaps.geocode(location)

    rst[location] = [geocode_result[0]['geometry']['location']['lat'],
    geocode_result[0]['geometry']['location']['lng']]

print(rst)