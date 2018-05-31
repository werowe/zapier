import sys
import socket
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(("", 8080))
server_socket.listen(5)

print("TCP Server Waiting for client on port 8080")

while True:
    try:
        client_socket, address = server_socket.accept()
        print("TCP Server received connect from: " + str(address))
        data = client_socket.recv(512)
        print("Received: " + str(data,'UTF-8'))
    except KeyboardInterrupt:
        client_socket.close()
        sys.exit(1)
