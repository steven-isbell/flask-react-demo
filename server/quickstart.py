from __future__ import print_function
from apiclient.discovery import build
from httplib2 import Http
from oauth2client import file as oauth_file, client, tools

# file to load
file_to_load = 'WDL16 - Student Tracker.xlsx'
file_id = None


# Setup the Drive v3 API
SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly'
store = oauth_file.Storage('token.json')
creds = store.get()
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('credentials.json', SCOPES)
    creds = tools.run_flow(flow, store)
service = build('drive', 'v3', http=creds.authorize(Http()))

# Call the Drive v3 API
results = service.files().list(
    pageSize=1000, fields="nextPageToken, files(id, name)").execute()
items = results.get('files', [])
if not items:
    print('No files found.')
else:
    print('Files:')
    for item in items:
        if item['name'] == file_to_load:
            print('{0} ({1})'.format(item['name'], item['id']))


def print_file_content():
    try:
        print service.files().get_media(fileId=file_id).execute()
    except errors.HttpError, error:
        print 'An error occurred: %s' % error
