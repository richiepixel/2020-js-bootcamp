package main

import (
	"fmt"
	"strings"

	"rsc.io/quote"
)

func main() {
	fmt.Println("Hello World, Richie!")
	//declarando variable antes de usarla
	var result string
	result = getQuote("glass")
	fmt.Println(result)

	//usando duck typing
	goCallResult := getQuote("go")
	fmt.Println(getQuote(goCallResult))

	fmt.Println(getQuote("hello"))
	fmt.Println(getQuote("opt"))
	fmt.Println(getQuote("otra"))
}

func getQuote(kindOfQuote string) string {
	var result string
	result = kindOfQuote + ": "
	switch strings.ToLower(kindOfQuote) {
	case "go":
		result += quote.Go()

	case "glass":
		result += quote.Glass()

	case "hello":
		result += quote.Hello()

	case "opt":
		result += quote.Opt()

	default:
		result += "Is not valid"

	}
	return result
}
