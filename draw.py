from gmplot import gmplot as gp

map = gp.GoogleMapPlotter(40.1105875,-88.2072697,13,apikey="AIzaSyCLV6iOyD6d60RXPgpzMf4baAy8ZqjCdYE")

lat1,long1 = zip(*[(40.11656,-88.22895),
                 (40.12993,-88.21986)])

lat2, long2 = zip(*[(40.11165,-88.24414),
                 (40.12999,-88.21989)])

print(lat2)
print(long2)

map.plot(lat1,long1,color="mediumaquamarine")

map.plot(lat2,long2,color="black")

#
# # Draw
map.draw("my_map2.html")