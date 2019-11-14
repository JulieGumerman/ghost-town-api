# Ghost Town Api

### Table of Contents

* users
* location
* location category

### Users
**Register a user**
Post your request to "/api/register". Id will appear automatically. 
Shape your user like this: 
```
{
    username: "",
    password: ""
}
```

**Login a user**
Shape your post request like this: 
```
{
  username: "",
  password: ""
}
```

### Locations
**Get Locations**
This is a basic get request to "/api/locations"

Your array of objects will be shaped like this:
```
[
  {
    "id": 1,
    "location": "Clearwater",
    "description": "A town of around 800; a good location to sleep and get gas",
    "longitude": "-97.501389",
    "latitude": "37.505556"
  }
]
```

**Get Location By Id**

Direct this get request to "/api/locations/:id"
An object will be shaped like this: 

```
  {
    "id": 1,
    "location": "Clearwater",
    "description": "A town of around 800; a good location to sleep and get gas",
    "longitude": "-97.501389",
    "latitude": "37.505556"
  }

```

**Post a Location**

Items will automatically get an id; shape your post request like this:

```
  {
    location: Spray,
    description: A tiny town in eastern Oregon,
    longitude: -119.794444,
    latitude: 44.833056
  }
```
direct post requests to /api/locations

### Location category

***get***
***post***
***delete***