import io
import csv


def read(file):
    print(file)
    stream = io.StringIO(file.stream.read().decode("UTF8"), newline=None)
    csv_input = csv.reader(stream)

    stream.seek(0)
    result = stream.read()
    return result
