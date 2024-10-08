import json
from jupyter_server.base.handlers import APIHandler
from jupyter_server.utils import url_path_join
from tornado import web


def get_data():
    # replcae the content here from the subprocess calling and a util function to load the data
    data = [
        {"id": 1, "name": "Package A", "version": "1.0.0"},
        {"id": 2, "name": "Package B", "version": "1.0.0"},
        {"id": 3, "name": "Package C", "version": "1.0.0"},
        {"id": 4, "name": "Package D", "version": "1.0.0"},
        {"id": 5, "name": "Package E", "version": "1.0.0"},
    ]
    return data


class DataHandler(APIHandler):
    @web.authenticated
    def get(self):
        data = get_data()
        self.write(json.dumps(data))


def setup_handlers(web_app):
    print("Simplext1 Server Module Loaded!!!")
    host_pattern = ".*$"
    route_pattern = url_path_join(web_app.settings["base_url"], "/v3/pip-list")
    web_app.add_handlers(host_pattern, [(route_pattern, DataHandler)])
