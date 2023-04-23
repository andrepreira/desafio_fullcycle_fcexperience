# Build stage
FROM golang:alpine AS build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o main .

# Production stage
FROM scratch

COPY --from=build /app/main /app/main

CMD ["/app/main"]

