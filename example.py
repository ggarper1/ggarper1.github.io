from notionRequests import Notion_Request

def example_add_page_to_db():
    NOTION_TOKEN = "1234..."
    DB_ID = "abc..."

    data = {
        "Property#1" : {
            "type" : "title",
            "title" : [{"text": {"content" : "My content for property 1"}}]
        },
        "Property#2" : {
            "type" : "rich_text",
            "rich_text" : [{"text": {"content": 'My content for property 2'}}]
        }
    }

    nr = Notion_Request(NOTION_TOKEN)
    nr.add_page_to_db(db_id=DB_ID, data=data)

def example_add_block_to_page():
    NOTION_TOKEN = "123..."
    PAGE_ID = "abc..."

    blocks = [
        {
            "object": "block",
            "type": "paragraph",
            "paragraph": {
                "rich_text": [{
                    "text": {
                        "content": "Content for the first block of text here",
                    }
                }]
            }
        },
        {
            "object": "block",
            "type": "paragraph",
            "paragraph": {
                "rich_text": [{
                    "text": {
                        "content": "Content for the second block of text here",
                    }
                }]
            }
        }
    ]

    nr = Notion_Request(notion_token=NOTION_TOKEN)
    print(nr.add_block_to_page(page_id=PAGE_ID, data=blocks))

def example_retrieve_block():
    NOTION_TOKEN = "123..."
    BLOCK_ID = "abc..."

    nr = Notion_Request(notion_token=NOTION_TOKEN)
    results = nr.retrieve_block(block_id=BLOCK_ID)

def example_search():
    NOTION_TOKEN = "123..."
    filter = {
        'property': 'object',
        'value': 'database'
    }

    nr = Notion_Request(notion_token=NOTION_TOKEN)
    results = nr.search(filter=filter)

def example_query_db():
    NOTION_TOKEN = "123..."
    DB_ID = "abc..."

    filter = { "filter" : {
	    "property" : "Finished",
	    "checkbox" : { "equals" : True }
    }}
    
    nr = Notion_Request(notion_token=NOTION_TOKEN)
    results = nr.query_db(db_id=DB_ID, filter=filter)
