curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{}'
