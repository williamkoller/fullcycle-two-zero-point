FROM golang:1.12.0-alpine3.9 as builder

LABEL maintainer="William Koller <williamkoller30@gmail.com>"

WORKDIR /go/src/main


COPY main.go .
RUN go build -o main .

RUN export GO111MODULE=off
RUN go mod download

FROM scratch

WORKDIR /go/src/main

COPY --from=builder /go/src/main .

CMD ["./main"]
