package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

//SaveUser --> POST
func SaveUser(c echo.Context) error {
	return c.String(http.StatusOK, "saveUser")
}

//GetUser --> GET
func GetUser(c echo.Context) error {

	id := c.Param("id")
	if id == "" {
		return c.String(http.StatusOK, "GetUser")
	}
	return c.String(http.StatusOK, "GetUser "+id)

}

//DeleteUser --> DELETE
func DeleteUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusGone, "user "+id+" has been deleted")
}

//UpdateUser --> UPDATE
func UpdateUser(c echo.Context) error {
	id := c.Param("id")
	return c.String(http.StatusCreated, "user "+id+" has been updated")
}
