# Rewards Solution
This app keeps track of rewards for customers based on the amount of money spent on a transaction.

# Instructions
Load the url to see the customers, their transaction and how many reward points they have.

# How It Works
The app looks at a JSON file with customer transactions. On componentDidMount, it looks at each of the transactions(using the .forEach method) and adds a Rewards Bonus to each of them. Each transaction earns 1 bonus point per dollar after 50 up to 100, and then 2 points per dollar after 100. Then the program displays each of the transaction information on the page using the .map method.
