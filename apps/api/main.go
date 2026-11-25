
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "Hello from Go Backend!")
	})

	log.Println("Go server running on :8080")

	log.Fatal(http.ListenAndServe(":8080", nil))
}