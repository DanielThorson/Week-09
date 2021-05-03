function bindUserSubmit() {
  document.getElementById("createNewUser").onsubmit = createNewUser;
}

function createNewUser(event) {
  var newUserData = Object.fromEntries(new FormData(event.target).entries());
  console.log(newUserData);

  fetch("http://localhost:5000/api/accounts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("New User Successfully Created");
    })
    .catch((err) => {
      console.error(err);
    });

  event.preventDefault();
}

// for transaction portion
function bindTransactionSubmit() {
  document.getElementById(
    "createNewTransaction"
  ).onsubmit = createNewTransaction;
}

function createNewTransaction(event) {
  var newTransaction = Object.fromEntries(new FormData(event.target).entries());

  console.log(newTransaction.user);
  fetch(
    `http://localhost:5000/api/accounts/${newTransaction.user}/transactions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("New Transaction Successfully Created");
      //   document.getElementById("createNewTransaction").style.display = "none";
    })
    .catch((err) => {
      console.error(err);
    });

  event.preventDefault();
}
