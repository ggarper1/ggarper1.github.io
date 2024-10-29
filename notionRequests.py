import requests
import json

class Notion_Request():

    """
    A class for easily accesing Notion's API. This class
    does not make use of all of Notion's API.

    Class Attributes:
        `headers`:          headers for Notion's API
        `database_url`:     Notion's API url for databases
        `page_url`:         Notions's API for pages
    """

    NOTION_VERSION = "2022-06-28"

    def __init__(self, notion_token: str):
        self.headers = {
            "Authorization": f"Bearer {notion_token}",
            "Content-Type": "application/json",
            "Notion-Version": Notion_Request.NOTION_VERSION
        }
        self.database_url = "https://api.notion.com/v1/databases"
        self.page_url = "https://api.notion.com/v1/pages"
        self.block_url = "https://api.notion.com/v1/blocks"
        self.base_url = "https://api.notion.com/v1"
    
    def retrieve_db(self, db_id: str):
        """
        Summary:
            This function retrieves a Notion database's schema using Notion's API.

        Parameters:
            `db_id`: the id of the database you want to retrieve.
        
        Returns:
            A dictionary with a Notion database schema.
        """
        return requests.get(url=self.database_url+f"/{db_id}", headers=self.headers, timeout=60).json()

    def query_db(self, db_id: str, filter: dict={}):
        """
        Summary:
            This function queries a Notion database using Notion's API.

        Parameters:
            `db_id`: the id of the database you want to query.

            `filter`: a filter for the query
        
        Returns:
            A dictionary with the results of Notion database's query.
        """
        return requests.post(url=self.database_url+f"/{db_id}/query", data=json.dumps(filter), headers=self.headers, timeout=60).json()
    
    def add_page_to_db(self, db_id: str, data: dict):
        """
        Summary:
            This function adds a page to a Notion database using Notion's API.

        Parameters:
            `db_id`: the id of the database you want to add a page to.
            `data`: a dictionary with the data you want to add to the page.
        
        Returns:
            The HTTP request response.
        """
        page = {
            "parent" : {"type" : "database_id", "database_id" : db_id},
            "properties" : data
        }
        return requests.post(url=self.page_url, headers=self.headers, json=page, timeout=60).json()
    
    def retrieve_page(self, page_id: str):
        """
        Summary:
            This function retrieves a Notion page using Notion's API.

        Parameters:
            `page_id`: the id of the page you want to retrieve.
        
        Returns:
            A dictionary that represents a Notion page.
        """
        return requests.get(url=self.page_url + f"/{page_id}", headers=self.headers, timeout=60).json()
    
    def query_page(self, page_id: str):
        """
        Summary:
            This function queries a Notion page's blocks using Notion's API.

        Parameters:
            `page_id`: the id of the page you want to query.
        
        Returns:
            A dictionary that represents a Notion page's blocks.
        
        Notes:
            When you pass the parameter `filter` it must have the following structure:
                {"filter" : dictionary_with_filter}
            See example.py.
        """
        return requests.get(url=self.block_url + f"/{page_id}/children?page_size=100", headers=self.headers, timeout=60).json()

    def add_blocks_to_page(self, page_id: str, data: list):
        """
        Summary:
            This function adds blocks to a Notion page using Notion's API.

        Parameters:
            `page_id`: the id of the page you want to add a block to.
            `data`: a list with all the blocks you want to add to the page.
        
        Returns:
            The HTTP request response.
        """
        block = {"children" : data}
        return requests.patch(f"https://api.notion.com/v1/blocks/{page_id}/children", data=json.dumps(block), headers=self.headers, timeout=60).json() 
    
    def retrieve_block(self, block_id: str):
        """
        Summary:
            This function retrieves a Notion block using Notion's API.

        Parameters:
            `block_id`: the id of the block you want to retrieve.
        
        Returns:
            A dictionary that represents a Notion block.
        """
        return requests.get(url=self.block_url + f"/{block_id}", headers=self.headers, timeout=60).json()
    
    def search(self, filter: dict={}):
        """
        Summary:
            This function searches for a Notion objects using Notion's API.

        Parameters:
            `filter`: the filter you want to use to search for a Notion page. For example, if you want to search for databases:
                filter = {"property": "object", "value": "database"}
        
        Returns:
            The results of the search.
        
        Notes:
            When you pass the parameter `filter` it must have the following structure:
                {"filter" : dictionary_with_filter}
            See example.py.
        """
        url = f"{self.base_url}/search"
        response = requests.post(url, headers=self.headers, json=filter, timeout=60).json()
        return response