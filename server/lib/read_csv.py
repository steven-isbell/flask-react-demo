import io
import csv


# def transform(text_file_contents):
# return text_file_contents.replace("=", ",")


def read(file):
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)
    #print("file contents: ", file_contents)
    # print(type(file_contents))
    # for row in csv_input:
    #     print(row)

    stream.seek(0)
    result = stream.read()
    return result
