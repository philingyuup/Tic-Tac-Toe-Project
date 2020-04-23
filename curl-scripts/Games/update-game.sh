curl "https://tic-tac-toe-wdi.herokuapp.com/games/19" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=BAhJIiU1MmQ2MmQzMmY3ZWVjYmNkYjhmZTljMTcxN2E5MjA2ZgY6BkVG--cb34926cc027e210b1fa38308f1ccbff7f19cf05" \
  --data '{
    "game":{
      "cell":{
        "index":0,
        "value": "x"
      },
      "over": false
    }
  }'
