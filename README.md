## GREY

Imagine you work at a port and are in charge of vessel allocations. Each day, you are given a list of containers that need to be shipped and a list of vessels that are leaving that day. You need to assign the containers to those vessels so that they can get to their final destinations.

 Your job is to create a frontend that does a super simplified version of this.
 Specifically, using the API documented below, you should allow the user to:

## API
```api.py``` contains a very simple Flask API

###To run the api:
1) (Optionally) Create a virtualenv <br>
```virtualenv venv```
<br>
 ```source venv/bin/activate```
2) ```pip install -r requirements.txt```
3) ```python api.py```
4) Test it by running: ```curl http://127.0.0.1:8000/containers```